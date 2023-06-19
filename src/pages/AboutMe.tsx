import "../styles/main.sass";
import "aos/dist/aos.css";

import MyImg from "../img/pictures/my-img.png";
import UnivIcon from "../img/icons/university-icon.svg";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme section">
      <section className="aboutme__main">
        <header className="section__header">
          <h2 data-aos="fade-down">About Me</h2>
        </header>
        <main>
          <section className="profile__info" data-aos="fade-right">
            <img src={MyImg} alt="" />
            <div className="info">
              <div className="college">
                <img src={UnivIcon} alt="" />
                <span>Universidade Federal Fluminense</span>
              </div>
            </div>
          </section>
          <section className="aboutme__info" data-aos="fade-left">
            <section className="info__text">
              <p>
                I had my first contact with the world of programming at
                university. That's when I knew I wanted to do this for the rest
                of my life.
              </p>
              <p>
                After fall in love with front-end development, I started to
                create my own projects to improve myself and create some cool
                stuff that I wish the world had.
              </p>
            </section>
          </section>
        </main>
      </section>

      <section className="technologies" data-aos="fade-up">
        <header>
          <h3>Technologies</h3>
        </header>
        <main>
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-git-plain colored"></i>
        </main>
      </section>
    </section>
  );
};

export default AboutMe;
