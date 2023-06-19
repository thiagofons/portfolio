import MyImg from "../img/pictures/my-img.png";
import UnivIcon from "../img/icons/university-icon.svg";
import "../styles/main.sass";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme section">
      <header className="info__header">
        <h2>About Me</h2>
        <img src={MyImg} alt="" />
        <div className="info">
          <div className="college">
            <img src={UnivIcon} alt="" />
            <span>Universidade Federal Fluminense</span>
          </div>
        </div>
      </header>
      <main className="info__body">
        <div className="info__text">
          <p>
            I had my first contact with the world of programming at university.
            That's when I knew I wanted to do this for the rest of my life.
          </p>
          <p>
            After fall in love with front-end development, I started to create
            my own projects to improve myself and create some cool stuff that I
            wish the world had.
          </p>
        </div>
        <div className="technologies">
          <div className="tech__header">
            <h3>Technologies</h3>
            <p>Some technologies I've learned through this process</p>
          </div>

          <div className="tech__container">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-react-original colored"></i>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
