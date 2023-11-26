import LivePreviewIcon from "../../assets/icons/live-preview.svg";
import GitHubIcon from "../../assets/icons/github-light.svg";

import "../../styles/components/card.sass";

type WebAppCardProps = {
  image: any;
  name: string;
  description: string;
  techStack: Array<string>;
  livePreviewLink: string;
  codeLink: string;
};

const WebAppCard = (props: WebAppCardProps) => {
  return (
    <div className="card web">
      <header className="card__header">
        <img src={props.image} alt="" />
      </header>
      <main className="card__main">
        <header>
          <h4>{props.name}</h4>
        </header>
        <main>
          <section className="content">
            <p className="card__description">{props.description}</p>
            <p className="tech__list">
              <span className="bold">Tech stack: </span>
              {props.techStack.map((item, index) =>
                index < props.techStack.length - 1 ? item + ", " : item
              )}
            </p>
          </section>
          <section className="links">
            <a className="link" href={props.livePreviewLink} target="_blank" rel="noreferrer">
              <img src={LivePreviewIcon} alt="" />
              <span>Live Preview</span>
            </a>
            <a className="link" href={props.codeLink} target="_blank" rel="noreferrer">
              <img src={GitHubIcon} alt="" />
              <span>View Code</span>
            </a>
          </section>
        </main>
      </main>
    </div>
  );
};

export default WebAppCard;
