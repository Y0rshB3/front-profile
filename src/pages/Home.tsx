import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Code, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getSkills, getExperiences, getProjects, getBlogPosts, getMessageWelcome } from '../api';
import { Skill, Experience, Project, BlogPost, MessageWelcome } from '../types';
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import ExperienceCard from '../components/ExperienceCard';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [messageWelcome, setMessageWelcome] = useState<MessageWelcome | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchData = async () => {
        try {
          const [skillsData, experiencesData, projectsData, blogPostsData, messageWelcomeData] = await Promise.all([
            getSkills(code),
            getExperiences(code),
            getProjects(code),
            getBlogPosts(code),
            getMessageWelcome(),
          ]);

          setSkills(skillsData);
          setExperiences(experiencesData);
          setProjects(projectsData);
          setBlogPosts(blogPostsData);
          setMessageWelcome(messageWelcomeData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const code = i18n.language;
        const [skillsData, experiencesData, projectsData, blogPostsData, messageWelcomeData] = await Promise.all([
          getSkills(code),
          getExperiences(code),
          getProjects(code),
          getBlogPosts(code),
          getMessageWelcome(),
        ]);

        setSkills(skillsData);
        setExperiences(experiencesData);
        setProjects(projectsData);
        setBlogPosts(blogPostsData);
        setMessageWelcome(messageWelcomeData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      {/* Hero Section */}
      <section className="gameboy-container mb-8">
        <div className="gameboy-screen">
          <h1 className="text-2xl font-bold mb-4 typewriter-effect">{messageWelcome?.title}</h1>
          <p className="mb-6 pixel-text">
            {messageWelcome?.message}
          </p>
          <div className="flex gap-4">
            <Link to="/projects" className="pixel-button border-2 border-gameboy-green-1 px-4 py-2">
              {t('home.viewProjects')}
            </Link>
            <Link to="/skills" className="pixel-button border-2 border-gameboy-green-1 px-4 py-2">
              {t('home.mySkills')}
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Code size={24} className="text-gameboy-green-1" />
            <h2 className="text-xl font-bold">{t('nav.skills')}</h2>
          </div>
          <Link to="/skills" className="flex items-center gap-1 hover:underline">
            <span>{t('home.viewAll')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gameboy-container">
          <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
            {skills.slice(0, 3).map(skill => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Briefcase size={24} className="text-gameboy-green-1" />
            <h2 className="text-xl font-bold">{t('nav.experience')}</h2>
          </div>
          <Link to="/experience" className="flex items-center gap-1 hover:underline">
            <span>{t('home.viewAll')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gameboy-container">
          <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
            {experiences.slice(0, 2).map(experience => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Code size={24} className="text-gameboy-green-1" />
            <h2 className="text-xl font-bold">{t('nav.projects')}</h2>
          </div>
          <Link to="/projects" className="flex items-center gap-1 hover:underline">
            <span>{t('home.viewAll')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gameboy-container">
          <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
            <div className="pixel-grid">
              {projects.slice(0, 2).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText size={24} className="text-gameboy-green-1" />
            <h2 className="text-xl font-bold">{t('nav.blog')}</h2>
          </div>
          <Link to="/blog" className="flex items-center gap-1 hover:underline">
            <span>{t('home.viewAll')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gameboy-container">
          <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
            <div className="pixel-grid">
              {blogPosts.slice(0, 2).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <User size={24} className="text-gameboy-green-1" />
          <h2 className="text-xl font-bold">{t('home.aboutMe')}</h2>
        </div>
        <div className="gameboy-container">
          <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
            <p className="mb-4 pixel-text">
              {t('home.aboutText1')}
            </p>
            <p className="mb-4 pixel-text">
              {t('home.aboutText2')}
            </p>
            <Link to="/contact" className="pixel-button inline-block">
              {t('home.contactMe')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
