import MyImg from "../img/my-img.png";
import UnivIcon from "../img/university-icon.svg";
import "../styles/main.sass";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme">
      <header className="info__header">
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
          <h3>About Me</h3>
        </div>
        <div className="technologies">
          <h3>Technologies</h3>
          <div className="tech__container">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original colored"></i>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
