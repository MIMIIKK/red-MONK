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
              I'm a dedicated Full-Stack Developer with a passion for building clean, scalable, and intuitive web applications.
              My expertise spans Django, React, responsive design and other modern technologies, allowing me to craft efficient solutions that bring ideas to life.
            </p>
            <p>
              I thrive in dynamic, collaborative environments where creativity meets problem-solving.
              A fast learner and curious thinker, I continuously explore new tools and best practices.
              Outside of development, you'll often find me contributing to open-source projects, diving into emerging tech, or recharging in nature.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;