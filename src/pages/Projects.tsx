import "../styles/main.sass";

import { useEffect, useState } from "react";
import Project from "../components/layout/Project";
import { projects } from "../Projects";

import MyNotes from "../img/projects/mynotes.png"

const Projects = () => {
  const images = [
    MyNotes,
  ];

  return (
    <section id="projects" className="projects section">
      <header className="projects__header">
        <h2>Projects</h2>
        <p>Here are some projects I developed to improve my front-end skills</p>
      </header>
      <main className="projects__carousel">
        {projects &&
          projects.map((project, index) => (
            <Project
              name={project.name}
              img={images[index]}
              text={project.text}
              githubLink={project.githubLink}
              liveSiteLink={project.liveSiteLink}
            />
          ))}
      </main>
    </section>
  );
};

export default Projects;
