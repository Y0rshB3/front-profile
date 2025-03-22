import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SocialLink } from '../types';
import { getSocialLinks } from '../api';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [socialLink, setSocialLink] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const handleLanguageChange = () => {
      const code = i18n.language;
      setLoading(true);
      const fetchData = async () => {
        try {
          const [socialLinkData] = await Promise.all([
            getSocialLinks(code),
          ]);
          setSocialLink(socialLinkData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  if (loading) {
    return (
      <div className="gameboy-container p-8 text-center">
        <p className="typewriter-effect">Loading...</p>
      </div>
    );
  }
  return (
    <footer className="gameboy-container mt-8 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">{t('footer.copyright')}</p>
        <div className="flex gap-4">
          {socialLink.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {link.icon === 'Github' && <Github size={24} className="text-gameboy-green-1 hover:text-gameboy-green-2" />}
              {link.icon === 'LinkedIn' && <Linkedin size={24} className="text-gameboy-green-1 hover:text-gameboy-green-2" />}
              {link.icon === 'Mail' && <Mail size={24} className="text-gameboy-green-1 hover:text-gameboy-green-2" />}
              {link.icon === 'Twitter' && <Twitter size={24} className="text-gameboy-green-1 hover:text-gameboy-green-2" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
