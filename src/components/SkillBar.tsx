import React from 'react';
import { Skill } from '../types';
import * as LucideIcons from 'lucide-react';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const Icon = (LucideIcons as any)[skill.icon];

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        {Icon && <Icon size={20} className="text-gameboy-green-1" />}
        <span className="font-bold">{skill.name}</span>
        <span className="ml-auto">{skill.level}%</span>
      </div>
      <div className="w-full h-4 bg-gameboy-green-4 border-2 border-gameboy-green-1">
        <div 
          className="h-full bg-gameboy-green-1" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
