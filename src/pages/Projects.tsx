import "../styles/main.sass";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Project from "../components/layout/Project";
import { projects } from "../Projects";

import MyNotes from "../img/projects/mynotes.png"




const Projects = () => {
  const images = [
    MyNotes,
  ];

  return (
    <section id="projects" className="projects section" >
      <header className="section__header">
        <h2 data-aos="fade-up">Projects</h2>
      </header>
      <main className="projects__container" data-aos="fade-up">
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
