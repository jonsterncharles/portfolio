import React from 'react';
import ReactDOM from 'react-dom';

function ProjectsGallery() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <img src="https://via.placeholder.com/300x200" alt="Project 1" />
        <p>A brief description of Project 1.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <img src="https://via.placeholder.com/300x200" alt="Project 2" />
        <p>A brief description of Project 2.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <img src="https://via.placeholder.com/300x200" alt="Project 3" />
        <p>A brief description of Project 3.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}