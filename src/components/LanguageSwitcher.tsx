import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const languages = [
  { code: 'en', name: 'English', countryCode: 'GB', codeUpper: 'EN' },
  { code: 'es', name: 'Español', countryCode: 'ES', codeUpper: 'ES' },
  { code: 'fr', name: 'Français', countryCode: 'FR', codeUpper: 'FR' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gameboy-green-1 hover:text-gameboy-green-2 sm:ml-4 xs:ml-4">
        <ReactCountryFlag
          countryCode={languages.find(lang => lang.code === i18n.language)?.countryCode || 'GB'}
          svg
          style={{ width: '1.5em', height: '1.5em' }}
          title={i18n.language}
        />
        <span>{languages.find(lang => lang.code === i18n.language)?.codeUpper}</span>
      </button>
      <div className="absolute lg:right-0 mt-0 w-36 bg-gameboy-green-4 border-2 border-gameboy-green-1 hidden group-hover:block z-10 xs:left-auto xs:right-0">
      {languages.map(({ code, name, countryCode }) => (
          <button
            key={code}
            onClick={() => changeLanguage(code)}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gameboy-green-3 ${
              i18n.language === code ? 'bg-gameboy-green-3' : ''
            }`}
          >
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
              title={name.toUpperCase()}
            />
            <span>{languages.find(lang => lang.code === code)?.codeUpper}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
