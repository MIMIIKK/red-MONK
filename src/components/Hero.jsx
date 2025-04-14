import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">red-MONK</span></h1>
        <p className="tagline">Full-Stack Developer crafting modern web experiences.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;