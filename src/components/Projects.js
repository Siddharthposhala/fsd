import React from "react";
import "./App.css";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description about Project 1.",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description about Project 2.",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description about Project 3.",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description about Project 5.",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="heading">Projects</h2>
      <div className="grid-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
