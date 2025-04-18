import '../styles/projects.css';

function ProjectCard({ title, description, image, tags, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={liveLink} className="btn btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={githubLink} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "MealMate App",
      description: "Full-stack app for meal planning using Kotlin & Room database. Features include recipe management, nutritional analysis, and grocery list generation.",
      image: "images/mealmate.png",
      tags: ["Kotlin", "Room", "Firebase"],
      liveLink: "https://mealmate-app.vercel.app",
      githubLink: "https://github.com/MIMIIKK/MealMate.git"
    },
    {
      title: "AI Solutions",
      description: "AI-Solutions offers cutting-edge virtual assistant and prototyping solutions powered by artificial intelligence to enhance digital employee experiences. The product detail page showcases comprehensive specifications, customer testimonials, and includes a Schedule Demo form for interested customers to request personalized demonstrations.",
      image: "images/ai-solutions.png",
      tags: ["React", "Django", "SQLite"],
      liveLink: "https://ai-solutions.vercel.app",
      githubLink: "https://github.com/MIMIIKK/AI-Solutions.git"
    },
    {
      title: "BWES",
      description: "Better World Employment Services' new job portal connects employers and job seekers through a secure, user-friendly platform. This Node.js application features authentication, searchable job listings, company dashboards for managing postings, and application tracking—all designed to promote equal employment opportunities and broaden access to the job market.",
      image: "images/bwes.png",
      tags: ["JavaScript", "React", "ExpressJs", "NodeJs"],
      liveLink: "https://BWES.vercel.app",
      githubLink: "https://github.com/MIMIIKK/BWES.git"
    },
    {
      title: "Tourism Recommendation Chatbot",
      description: "Tourism Recommendation Chatbot, an AI-powered chatbot that suggests sustainable travel destinations using hybrid recommendation algorithms and natural language processing.",
      image: "images/chatbot.png",
      tags: ["Python", "Neural Network"],
      liveLink: "https://tourism-recommendation-chatbot.vercel.app",
      githubLink: "https://github.com/MIMIIKK/Tourism-Recommendation-Chatbot.git"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;