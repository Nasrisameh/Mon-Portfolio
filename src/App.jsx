import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Banner />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
