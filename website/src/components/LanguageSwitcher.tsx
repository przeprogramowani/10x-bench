import { useState } from 'react';

interface LanguageSwitcherProps {
  onLanguageChange: (lang: 'PL' | 'EN') => void;
  defaultLanguage?: 'PL' | 'EN';
}

export default function LanguageSwitcher({ onLanguageChange, defaultLanguage = 'PL' }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<'PL' | 'EN'>(defaultLanguage);

  const handleLanguageChange = (lang: 'PL' | 'EN') => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => handleLanguageChange('PL')}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          language === 'PL'
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        PL
      </button>
      <button
        onClick={() => handleLanguageChange('EN')}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          language === 'EN'
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
