import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Banner = () => {
  const { language } = useContext(LanguageContext);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = {
    fr: [
      "🚀 Disponible pour de nouveaux projets",
      "💻 Passionné par le développement web",
      "🌟 Toujours en apprentissage continu",
      "🎯 Focus sur la qualité et l'innovation"
    ],
    en: [
      "🚀 Available for new projects",
      "💻 Passionate about web development",
      "🌟 Always in continuous learning",
      "🎯 Focus on quality and innovation"
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages[language].length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, [language, messages]);

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in-down">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium animate-fade-in">
            {messages[language][currentMessage]}
          </span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
