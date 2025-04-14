import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="logo">red-MONK</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="floating-hire-button">
  <a href="#contact" className="btn">Hire Me</a>
</div>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} red-MONK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;