import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/contexts';

const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: 'À propos de moi',
      paragraph1: 'Titulaire d\'une Licence Appliquée en Gestion Informatique, je suis passionné par l\'informatique et les nouvelles technologies. Fortement motivé à acquérir de l\'expérience professionnelle, j\'ai suivi une formation intensive en développement Full Stack Python || MERN à Coding Dojo Africa.',
      paragraph2: 'Mes compétences techniques incluent la maîtrise de HTML, CSS, JavaScript et React.js pour créer des interfaces utilisateur dynamiques, ainsi que Node.js, Express.js, Flask et Python pour développer des applications back-end robustes. Je suis également compétent avec les bases de données SQL et NoSQL.',
      paragraph3: 'Au-delà de mes compétences techniques, je possède de solides aptitudes en communication, gestion des conflits et résolution de problèmes. Je suis flexible et capable de m\'adapter rapidement aux changements dans des environnements professionnels en constante évolution.',
      contactTitle: 'Informations de contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation'
    },
    en: {
      title: 'About Me',
      paragraph1: 'Holder of an Applied License in Computer Management, I am passionate about computer science and new technologies. Strongly motivated to gain professional experience, I completed an intensive Full Stack Python || MERN development training at Coding Dojo Africa.',
      paragraph2: 'My technical skills include mastery of HTML, CSS, JavaScript and React.js to create dynamic user interfaces, as well as Node.js, Express.js, Flask and Python to develop robust back-end applications. I am also competent with SQL and NoSQL databases.',
      paragraph3: 'Beyond my technical skills, I have strong abilities in communication, conflict management and problem-solving. I am flexible and able to quickly adapt to changes in constantly evolving professional environments.',
      contactTitle: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location'
    }
  };

  return (
    <section id="about" className="py-20 gradient-bg-section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up text-gradient">{content[language].title}</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-slide-in-left">
            <div className="relative">
              <img src="images/profil.jpg" alt="Photo de Sameh Nasri" className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto shadow-2xl border-4 border-white card-hover" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                {content[language].paragraph1}
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                {content[language].paragraph2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content[language].paragraph3}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-gradient">{content[language].contactTitle}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <strong className="text-gradient mr-2">{content[language].email}:</strong> nasri.sameh2016@gmail.com
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <strong className="text-gradient mr-2">{content[language].phone}:</strong> +216 24 712 788
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <strong className="text-gradient mr-2">{content[language].location}:</strong> Ain Jloula, Kairouan, Tunisia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
