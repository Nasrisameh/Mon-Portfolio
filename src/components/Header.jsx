import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navItems = {
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold text-gray-800">Sameh Nasri</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition duration-300"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].home}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].about}</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].skills}</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].projects}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].contact}</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].home}</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].about}</a>
            <a href="#skills" className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].skills}</a>
            <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].projects}</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300">{navItems[language].contact}</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
