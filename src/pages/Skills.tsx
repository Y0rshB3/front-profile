import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getSkills } from '../api';
import { Skill } from '../types';
import SkillBar from '../components/SkillBar';

const Skills: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchSkills = async () => {
        try {
          const data = await getSkills(code);
          setSkills(data);
          setFilteredSkills(data);
        } catch (error) {
          console.error('Error fetching skills:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSkills();
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const code = i18n.language;
        const data = await getSkills(code);
        setSkills(data);
        setFilteredSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filterSkills = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === category));
    }
  };

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">{t('skills.loading')}</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-6">
        <Code size={28} className="text-gameboy-green-1" />
        <h1 className="text-2xl font-bold">{t('skills.title')}</h1>
      </div>

      <div className="gameboy-container mb-8">
        <div className="gameboy-screen border-2 border-gameboy-green-1 p-4">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterSkills(category)}
                className={`px-3 py-1 border-2 border-gameboy-green-1 text-sm ${
                  activeFilter === category 
                    ? 'bg-gameboy-green-1 text-gameboy-green-4' 
                    : 'bg-gameboy-green-3'
                }`}
              >
                {category === 'All' ? t('skills.all') : category}
              </button>
            ))}
          </div>

          <div>
            {filteredSkills.map(skill => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
