import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getProjects } from '../api';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchProjects = async () => {
        try {
          const data = await getProjects(code);
          setProjects(data);
          setFilteredProjects(data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProjects();
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const code = i18n.language;
        const data = await getProjects(code);
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filterProjects = (technology: string) => {
    setActiveFilter(technology);
    if (technology === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.technologies.includes(technology)
        )
      );
    }
  };

  // Extract unique technologies from all projects
  const technologies = ['All', ...Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  )];

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">{t('projects.loading')}</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-6">
        <Code size={28} className="text-gameboy-green-1" />
        <h1 className="text-2xl font-bold">{t('projects.title')}</h1>
      </div>

      <div className="gameboy-container mb-8 border-2 border-gameboy-green-1 p-4">
        <div className="gameboy-screen">
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map(tech => (
              <button
                key={tech}
                onClick={() => filterProjects(tech)}
                className={`px-3 py-1 border-2 border-gameboy-green-1 text-sm ${
                  activeFilter === tech 
                    ? 'bg-gameboy-green-1 text-gameboy-green-4' 
                    : 'bg-gameboy-green-3'
                }`}
              >
                {tech === 'All' ? t('projects.all') : tech}
              </button>
            ))}
          </div>

          <div className="pixel-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
