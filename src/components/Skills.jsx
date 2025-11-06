import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 70 },
    { name: 'Flask', level: 65 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'MySQL', level: 70 },
    { name: 'Git', level: 75 },

  ];

  const softSkills = {
    fr: [
      'Communication efficace',
      'Gestion des conflits',
      'Résolution de problèmes',
      'Flexibilité',
      'Collaboration interculturelle',
      'Prise de décision',
    ],
    en: [
      'Effective Communication',
      'Conflict Management',
      'Problem Solving',
      'Flexibility',
      'Cross-cultural Collaboration',
      'Decision Making',
    ]
  };

  const content = {
    fr: {
      title: 'Compétences',
      technicalTitle: 'Compétences Techniques',
      softTitle: 'Compétences Interpersonnelles',

      certificationsTitle: 'Certifications',
      cert1Title: 'Certification JavaScript Basics',
      cert1Org: 'SoftyEducation',
      cert1Desc: 'JavaScript Basics',
      cert1Period: 'Février 2025',

      cert2Title: 'Certification Développeuse Web Full Stack Python || MERN',
      cert2Org: 'Coding Dojo Africa',
      cert2Desc: 'Certification américaine : ce bootcamp intensif vous permettra d\'apprendre à utiliser plusieurs langages et frameworks. Il met l\'accent sur l\'apprentissage pratique et collaboratif, et vous bénéficierez d\'une aide à l\'insertion professionnelle.',
      cert2Period: 'Septembre 2023 - Juin 2024',

      cert3Title: 'IBM Cognitive Class',
      cert3Org: 'BigData Processing',
      cert3Desc: 'ISGT Big Data 101, Hadoop 101, MapReduce and YARN, Spark Fundamentals',
      cert3Period: '2020'
    },
    en: {
      title: 'Skills',
      technicalTitle: 'Technical Skills',
      softTitle: 'Interpersonal Skills',

      certificationsTitle: 'Certifications',
      cert1Title: 'JavaScript Basics Certification',
      cert1Org: 'SoftyEducation',
      cert1Desc: 'JavaScript Basics',
      cert1Period: 'February 2025',

      cert2Title: 'Full Stack Web Developer Certification Python || MERN',
      cert2Org: 'Coding Dojo Africa',
      cert2Desc: 'American certification: this intensive bootcamp will allow you to learn to use several languages and frameworks. It emphasizes practical and collaborative learning, and you will benefit from professional insertion assistance.',
      cert2Period: 'September 2023 - June 2024',

      cert3Title: 'IBM Cognitive Class',
      cert3Org: 'BigData Processing',
      cert3Desc: 'ISGT Big Data 101, Hadoop 101, MapReduce and YARN, Spark Fundamentals',
      cert3Period: '2020'
    }
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up text-gradient">{content[language].title}</h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Compétences techniques */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 card-hover">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-gradient">{content[language].technicalTitle}</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm animate-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences soft */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 card-hover">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-gradient">{content[language].softTitle}</h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills[language].map((skill, index) => (
                <div key={index} className="flex items-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-semibold mb-10 text-center text-gray-800 text-gradient">{content[language].certificationsTitle}</h3>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{content[language].cert1Title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{content[language].cert1Desc}</p>
                  <a href="https://drive.google.com/file/d/13fYrMstLjTzN6O_goHLuQAS7VKcWM1yx/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">View Certificate</a>
                  <p className="text-blue-600 font-medium">{content[language].cert1Org}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{content[language].cert1Period}</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{content[language].cert2Title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{content[language].cert2Desc}</p>
                  <a href="https://app.diplomasafe.com/en-US/certificates/dccc96b2aecadfde4250d96f7f6d9ca0a52be9188" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">View Certificate</a>
                  <p className="text-blue-600 font-medium">{content[language].cert2Org}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{content[language].cert2Period}</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{content[language].cert3Title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{content[language].cert3Desc}</p>
                  <p className="text-blue-600 font-medium">{content[language].cert3Org}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{content[language].cert3Period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
