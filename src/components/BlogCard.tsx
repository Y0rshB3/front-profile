import React from 'react';
import { BlogPost } from '../types';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="pixel-card p-4">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-40 object-cover mb-4 border-2 border-gameboy-green-1"
      />
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <p className="mb-4 text-sm">{post.summary}</p>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs">{post.date}</span>
        <span className="text-xs flex items-center gap-1">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-gameboy-green-4 border border-gameboy-green-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
