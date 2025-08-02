import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <span className="logo-text">red-MONK</span>
            <div className="logo-animation"></div>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="floating-hire-button">
        <a href="#contact" className="btn pulse-animation">
          <span>Hire Me</span>
          <div className="btn-glow"></div>
        </a>
      </div>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} red-MONK. All rights reserved.</p>
          <div className="footer-animation"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;