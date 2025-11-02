import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const projects = {
    fr: [
      {
        title: 'Plateforme de Gestion d\'Énergie Solaire',
        description: 'Développement d\'une plateforme web complète pour gérer et présenter des services d\'énergie solaire utilisant la pile MERN.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
        period: 'Avril 2024 - Juin 2024',
        company: 'Coding Dojo Africa'
      },
      {
        title: 'Application de Gestion de Conservatoire',
        description: 'Conception et développement d\'une application web et mobile pour la gestion d\'un conservatoire musical.',
        technologies: ['MERN Stack', 'Android Studio', 'MongoDB'],
        period: 'Février 2018 - Juin 2018',
        company: 'G-Dev Technology'
      },
      {
        title: 'Site de Vente en Ligne',
        description: 'Gestion efficace d\'un site e-commerce, optimisation de l\'expérience utilisateur et traitement sécurisé des transactions.',
        technologies: ['E-commerce', 'Gestion de stock', 'Paiements'],
        period: 'Juillet 2018 - Juillet 2019',
        company: 'Magerda'
      }
    ],
    en: [
      {
        title: 'Solar Energy Management Platform',
        description: 'Development of a complete web platform to manage and present solar energy services using the MERN stack.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
        period: 'April 2024 - June 2024',
        company: 'Coding Dojo Africa'
      },
      {
        title: 'Conservatory Management Application',
        description: 'Design and development of a web and mobile application for managing a music conservatory.',
        technologies: ['MERN Stack', 'Android Studio', 'MongoDB'],
        period: 'February 2018 - June 2018',
        company: 'G-Dev Technology'
      },
      {
        title: 'Online Sales Website',
        description: 'Efficient management of an e-commerce site, optimization of user experience and secure transaction processing.',
        technologies: ['E-commerce', 'Inventory Management', 'Payments'],
        period: 'July 2018 - July 2019',
        company: 'Magerda'
      }
    ]
  };

  const content = {
    fr: {
      title: 'Projets',
      technologies: 'Technologies utilisées:',
      period: 'Période:',
      company: 'Entreprise:'
    },
    en: {
      title: 'Projects',
      technologies: 'Technologies used:',
      period: 'Period:',
      company: 'Company:'
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
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden card-hover group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:animate-glow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

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
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span><strong className="text-gradient">{content[language].company}</strong> {project.company}</span>
                  </div>
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
