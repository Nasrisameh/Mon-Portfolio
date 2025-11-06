import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
