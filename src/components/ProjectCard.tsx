import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  
  return (
    <div className="pixel-card p-4">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-40 object-cover mb-4 border-2 border-gameboy-green-1"
      />
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="mb-4 text-sm">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-gameboy-green-4 border border-gameboy-green-1"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-sm hover:underline"
          >
            <ExternalLink size={16} />
            {t('projects.demo')}
          </a>
        )}
        {project.repoUrl && (
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-sm hover:underline"
          >
            <Github size={16} />
            {t('projects.code')}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
