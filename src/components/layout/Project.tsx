import "../../styles/main.sass";

import GitHubIcon from "../../img/icons/github-icon.svg"
import LiveSiteIcon from "../../img/icons/play-icon.svg"

type ProjectProps = {
  name: string;
  img: any;
  text: string;
  githubLink: string;
  liveSiteLink: string;
};

const Project = (props: ProjectProps) => {
  return (
    <div className="project">
      <header className="project__header">
        <div className="project__img">
          <img src={props.img} alt="" />
        </div>
        <div className="project__name">
          <h3>{props.name}</h3>
        </div>
      </header>
      <main className="project__body">
        <section className="project__description">
          <p>{props.text}</p>
        </section>
        <section className="project__links">
          <div className="project__link">
            <a href={props.liveSiteLink}>
              <img src={LiveSiteIcon} alt="" />
            </a>
          </div>
          <div className="project__link">
            <a href={props.githubLink}>
              <img src={GitHubIcon} alt="" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Project;