import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const projects = {
    fr: [
      {
        title: 'Plateforme ArtiMalls',
        description: 'ArtiMalls est une plateforme digitale révolutionnaire conçue pour connecter les artisans tunisiens traditionnels avec les détaillants et grossistes modernes. Notre mission est de digitaliser et moderniser l\'écosystème de l\'artisanat tunisien tout en préservant l\'authenticité et la qualité des savoir-faire ancestraux.',
        technologies: ['Vite + React.js', 'Node.js', 'PHP', 'Laravel', 'MongoDB', 'Express.js'],
        period: 'Aout 2025 - en cours',
        company: 'Coding Dojo Africa',
        link: 'https://github.com/Nasrisameh/ArtiMalls',
        image: '/images/artimalls-screenshot.png'
      },
      {
        title: 'Application de gestion des tâches',
        description: 'Conception et développement d\'une application web et mobile pour la gestion d\'un conservatoire musical.',
        technologies: ['MERN Stack', 'Android Studio', 'MongoDB'],
        period: 'Février 2018 - Juin 2018',
        company: 'G-Dev Technology',
        link: 'https://github.com/Nasrisameh/task-management-app',
        image: '/images/task-app-screenshot.png'
      },
      {
        title: 'Site de Vente en Ligne',
        description: 'Gestion efficace d\'un site e-commerce, optimisation de l\'expérience utilisateur et traitement sécurisé des transactions.',
        technologies: ['E-commerce', 'Gestion de stock', 'Paiements'],
        period: 'Juillet 2018 - Juillet 2019',
        company: 'Magerda',
        link: 'https://github.com/Nasrisameh/ecommerce-site',
        image: '/images/ecommerce-screenshot.png'
      }
    ],

    en: [
      {
        title: 'ArtiMalls Platform',
        description: 'ArtiMalls is a revolutionary digital platform designed to connect traditional Tunisian artisans with modern retailers and wholesalers. Our mission is to digitize and modernize the Tunisian handicraft ecosystem while preserving the authenticity and quality of ancestral craftsmanship.',
        technologies: ['Vite + React.js', 'Node.js', 'PHP', 'Laravel', 'MongoDB', 'Express.js'],
        period: 'August 2025 - Ongoing',
        company: 'Coding Dojo Africa',
        link: 'https://github.com/Nasrisameh/ArtiMalls',
        image: '/images/artimalls-screenshot.png'
      },
      {
        title: 'Task Management Application',
        description: 'Design and development of a web and mobile application for managing a music conservatory.',
        technologies: ['MERN Stack', 'Android Studio', 'MongoDB'],
        period: 'February 2018 - June 2018',
        company: 'G-Dev Technology',
        link: 'https://github.com/Nasrisameh/task-management-app',
        image: '/images/task-app-screenshot.png'
      },
      {
        title: 'Online Sales Website',
        description: 'Efficient management of an e-commerce site, optimization of user experience and secure transaction processing.',
        technologies: ['E-commerce', 'Inventory Management', 'Payments'],
        period: 'July 2018 - July 2019',
        company: 'Magerda',
        link: 'https://github.com/Nasrisameh/ecommerce-site',
        image: '/images/ecommerce-screenshot.png'
      }
    ]
  };

  const content = {
    fr: {
      title: 'Projets',
      technologies: 'Technologies utilisées:',
      period: 'Période:',
      // company: 'Entreprise:'
    },
    en: {
      title: 'Projects',
      technologies: 'Technologies used:',
      period: 'Period:',
      // company: 'Company:'
    }
  };

  return (
    <section id="projects" className="py-20 gradient-bg-section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-56 h-56 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up text-gradient">{content[language].title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[language].map((project, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden card-hover group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:animate-glow">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-glow">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <div className="mb-6">
                  <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 text-gradient">{content[language].technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong className="text-gradient">{content[language].period}</strong> {project.period}</span>
                  </div>
                  {/* <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg> */}
                    {/* <span><strong className="text-gradient">{content[language].company}</strong> {project.company}</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
