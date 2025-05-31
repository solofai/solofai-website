// ===== src/components/Projects.jsx =====
import React from 'react';
import { projects, projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="icon-large">{projectsData.icon}</div>
            <h1>{projectsData.title}</h1>
            <p className="hero-subtitle">{projectsData.description}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-icon">{project.icon}</div>

                <h2 className="project-title">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>

                <p className="project-description">{project.description}</p>

                <div className="tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="project-status">
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;