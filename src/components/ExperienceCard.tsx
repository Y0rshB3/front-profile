import React from 'react';
import { Experience } from '../types';
import { Calendar, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { t, i18n } = useTranslation();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'en' ? 'en-US' : 
                                  i18n.language === 'es' ? 'es-ES' : 'fr-FR', 
                                  { year: 'numeric', month: 'short' });
  };

  return (
    <div className="pixel-card mb-6 p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold">{experience.position}</h3>
        <div className="flex items-center gap-1 text-xs">
          <Calendar size={12} />
          <span>
            {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : t('experience.present')}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-4 text-sm">
        <Briefcase size={16} />
        <span>{experience.company}</span>
      </div>
      
      <p className="mb-4 text-sm">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-gameboy-green-4 border border-gameboy-green-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
