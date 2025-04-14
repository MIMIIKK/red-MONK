import '../styles/about.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="images/profile.JPG" alt="red-MONK" />
          </div>
          <div className="about-text">
            <p>
              I'm a passionate Full-Stack Developer with a focus on creating clean, efficient, and user-friendly web applications.
              With expertise in React, Node.js, and modern web technologies, I enjoy solving complex problems and turning ideas into reality.
            </p>
            <p>
              I'm a fast learner, creative thinker, and team player who thrives in collaborative environments.
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;