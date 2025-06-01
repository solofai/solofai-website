// ===== src/components/Projects.jsx =====
import React from 'react';
import { Link } from 'react-router-dom';
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
            {projects.map((project, idx) => {
              const isInternal = project.link?.startsWith('/');
              return (
                <div key={idx} className="project-card">
                  {/* Project Image */}
                  <div className="project-icon">{project.icon}</div>
                  
                  {/* Project Title and Description */}
                  <h2 className="project-title">
                    {/* Check if the link is internal or external */}
                    {project.link ? (
                      isInternal ? (
                        <Link to={project.link} className="project-link">
                          {project.title}
                        </Link>
                      ) : (
                        <a  
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {project.title}
                        </a>
                      )
                    ) : (
                      project.title
                    )}
                  </h2>
                  
                  {/* Project Description */}
                  <p className="project-description">{project.description}</p>

                  {/* Project Details */}
                  <div className="tech-tags">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Status */}
                  <p className="project-status">
                    <strong>Status:</strong> {project.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="back-home">
        <Link to="/" className="back-button">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;