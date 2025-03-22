import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../api';
import { BlogPost } from '../types';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchPosts = async () => {
        try {
          const data = await getBlogPosts(code);
          setPosts(data);
          setFilteredPosts(data);
        } catch (error) {
          console.error('Error fetching blog posts:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPosts();
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const code = i18n.language;
        const data = await getBlogPosts(code);
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filterPosts = (tag: string) => {
    setActiveFilter(tag);
    if (tag === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(post => 
          post.tags.includes(tag)
        )
      );
    }
  };

  // Extract unique tags from all posts
  const tags = ['All', ...Array.from(
    new Set(
      posts.flatMap(post => post.tags)
    )
  )];

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">{t('blog.loading')}</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-6">
        <FileText size={28} className="text-gameboy-green-1" />
        <h1 className="text-2xl font-bold">{t('blog.title')}</h1>
      </div>

      <div className="gameboy-container mb-8 border-2 border-gameboy-green-1 p-4">
        <div className="gameboy-screen">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => filterPosts(tag)}
                className={`px-3 py-1 border-2 border-gameboy-green-1 text-sm ${
                  activeFilter === tag 
                    ? 'bg-gameboy-green-1 text-gameboy-green-4' 
                    : 'bg-gameboy-green-3'
                }`}
              >
                {tag === 'All' ? t('blog.all') : tag}
              </button>
            ))}
          </div>

          <div className="pixel-grid">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
