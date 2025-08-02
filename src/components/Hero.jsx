import React, { useEffect, useState } from 'react';
import '../styles/hero.css';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const createParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="particles-container">
        {createParticles()}
      </div>
      
      <div className="hero-content">
        <div className={`hero-text ${isLoaded ? 'loaded' : ''}`}>
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="highlight">red-MONK</span>
          </h1>
          <p className="tagline">
            Full-Stack Developer crafting modern web experiences
            <span className="cursor-blink">|</span>
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <div className="btn-animation"></div>
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L17 10H14V3H10V10H7L12 15Z" fill="currentColor"/>
                <path d="M20 18H4V20H20V18Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-inner">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"red-MONK"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">let</span>
                  <span className="code-variable"> skills</span>
                  <span className="code-operator"> = </span>
                  <span className="code-bracket">[</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"React"</span>
                  <span className="code-operator">,</span>
                  <span className="code-string"> "Django"</span>
                  <span className="code-operator">,</span>
                  <span className="code-string"> "FastAPI"</span>
                  <span className="code-operator">,</span>
                </div>
                 <div className="code-line code-indent">
                  <span className="code-string">"Kotlin"</span>
                  <span className="code-operator">,</span>
                  <span className="code-string"> "PostgreSQL"</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"Figma"</span>
                  <span className="code-operator">,</span>
                  <span className="code-string"> "MongoDB"</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;