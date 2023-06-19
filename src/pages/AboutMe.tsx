import MyImg from "../img/pictures/my-img.png";
import UnivIcon from "../img/icons/university-icon.svg";
import "../styles/main.sass";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme section">
      <header className="info__header">
        <h2>About Me</h2>
      </header>
      <main>
        <section className="profile__info">
          <img src={MyImg} alt="" />
          <div className="info">
            <div className="college">
              <img src={UnivIcon} alt="" />
              <span>Universidade Federal Fluminense</span>
            </div>
          </div>
        </section>
        <section className="aboutme__info">
          <section className="info__text">
          <p>
            I had my first contact with the world of programming at university.
            That's when I knew I wanted to do this for the rest of my life.
          </p>
          <p>
            After fall in love with front-end development, I started to create
            my own projects to improve myself and create some cool stuff that I
            wish the world had.
          </p>
          </section>
          <section className="technologies">
            <header>
              <h3>Technologies</h3>
              <p>Some technologies I've learned through this process</p>
            </header>
            <main>  
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-sass-original colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
            </main>
          </section>
        </section>
      </main>
    </section>
  );
};

export default AboutMe;
