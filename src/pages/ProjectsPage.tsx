import WebAppCard from "../components/data/WebAppCard";

import "../styles/main.sass";

import MyNotesLogo from "../assets/images/projects/MyNotes.jpg";

const ProjectsPage = () => {
  return (
    <section id="projects" className="projects section">
      <header className="projects__header">
        <h2>Projects</h2>
        <p>Things I've built so far</p>
      </header>
      <main className="projects__main">
        <section className="projects__web">
          <header>
            <h3>Web</h3>
          </header>
          <main className="projects__container">
            <WebAppCard
              image={MyNotesLogo}
              name={"MyNotes"}
              description={"Write your notes"}
              techStack={["React, SASS"]}
              livePreviewLink={""}
              codeLink={""}
            />
          </main>
        </section>
        <section className="projects__mobile">
          <header>
            <h3>Mobile</h3>
          </header>
          <main className="projects__container"></main>
        </section>
      </main>
    </section>
  );
};

export default ProjectsPage;
