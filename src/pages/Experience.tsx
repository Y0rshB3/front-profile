import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getExperiences } from '../api';
import { Experience } from '../types';
import ExperienceCard from '../components/ExperienceCard';

const ExperiencePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchExperiences = async () => {
        try {
          const data = await getExperiences(code);
          setExperiences(data);
        } catch (error) {
          console.error('Error fetching experiences:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchExperiences();
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const code = i18n.language;
        const data = await getExperiences(code);
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">{t('experience.loading')}</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase size={28} className="text-gameboy-green-1" />
        <h1 className="text-2xl font-bold">{t('experience.title')}</h1>
      </div>

      <div className="gameboy-container mb-8 border-2 border-gameboy-green-1">
        <div className="gameboy-screen">
          {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
