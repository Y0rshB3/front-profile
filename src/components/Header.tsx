import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio] = useState(new Audio('/assets/sounds/shades_of_red_soundcloud_halc.mp3'));

  useEffect(() => {
    let timeout: number;
    if (logoClicks > 0) {
      timeout = window.setTimeout(() => {
        setLogoClicks(0);
      }, 2000);
    }
    if (logoClicks >= 5) {
      setShowEasterEgg(true);
      setLogoClicks(0);
    }
    return () => clearTimeout(timeout);
  }, [logoClicks]);

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1);
    if (!showEasterEgg) {
      const remaining = 5 - (logoClicks + 1);
      if (remaining > 0) {
        console.log(`${remaining} more clicks for a surprise!`);
      } else if (remaining === 0) {
        setIsMusicPlaying(isMusicPlaying);
        audio.play();
      }
    }
  };

  const toggleMusic = () => {
    if (!isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="gameboy-container mb-8 relative">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-6">

          {/* Logo and Name */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105"
            onClick={handleLogoClick}
          >
            <Logo 
              className={`text-gameboy-green-1 transition-transform ${showEasterEgg ? 'animate-bounce' : ''}`}
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold">Jorge Becerra</h1>
              <span className="text-sm text-gameboy-green-2">Full Stack Developer</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gameboy-green-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-4">
              <li><Link to="/" className="hover:underline">{t('nav.home')}</Link></li>
              <li><Link to="/skills" className="hover:underline">{t('nav.skills')}</Link></li>
              <li><Link to="/projects" className="hover:underline">{t('nav.projects')}</Link></li>
              <li><Link to="/blog" className="hover:underline">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="hover:underline">{t('nav.contact')}</Link></li>
            </ul>
          </nav>
          <LanguageSwitcher />
          {showEasterEgg && (
            <button
              onClick={toggleMusic}
              className="flex items-center gap-1 text-gameboy-green-1 hover:text-gameboy-green-2"
              aria-label={isMusicPlaying ? 'Stop music' : 'Play music'}
            >
              {isMusicPlaying ? <VolumeX size={20} /> : <Music size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 border-t-2 border-gameboy-green-1 pt-4">
          <nav className="mb-4 sm:ml-4">
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="block hover:underline" onClick={toggleMenu}>{t('nav.home')}</Link></li>
              <li><Link to="/skills" className="block hover:underline" onClick={toggleMenu}>{t('nav.skills')}</Link></li>
              <li><Link to="/projects" className="block hover:underline" onClick={toggleMenu}>{t('nav.projects')}</Link></li>
              <li><Link to="/blog" className="block hover:underline" onClick={toggleMenu}>{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="block hover:underline" onClick={toggleMenu}>{t('nav.contact')}</Link></li>
            </ul>
          </nav>
          <div className="flex items-center justify-between border-t-2 border-gameboy-green-1 pt-4">
            <LanguageSwitcher />
            {showEasterEgg && (
              <button
                onClick={toggleMusic}
                className="flex items-center gap-1 text-gameboy-green-1 hover:text-gameboy-green-2"
                aria-label={isMusicPlaying ? 'Stop music' : 'Play music'}
              >
                {isMusicPlaying ? <VolumeX size={20} /> : <Music size={20} />}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Easter egg animation */}
      {showEasterEgg && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="animate-float text-center">
            <span className="text-xs bg-gameboy-green-1 text-gameboy-green-4 px-2 py-1 rounded-sm">
              🎮 Mode Activated! 🎮
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
