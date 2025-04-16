import '../styles/skills.css';

function Skills() {
  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Bootstrap', 'Vanilla CSS'];
  const backendSkills = ['Node.js', 'Django', 'Express', 'MongoDB', 'SQL', 'RESTful APIs', 'Firebase', 'Room'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'Figma', 'Postman'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skill-list">
              {backendSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools</h3>
            <ul className="skill-list">
              {toolsSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;