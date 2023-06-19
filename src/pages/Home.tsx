import DownArrow from "../img/icons/down-arrow.svg";
import "../styles/main.sass";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <section id="home" className="home section" >
      <div className="hello" data-aos="zoom-in">
        <h1>
          Hi!
          <br />
          I'm Thiago
        </h1>
        <h2>
          your next
          <br />
          <span className="role">Front-End Developer</span>
        </h2>
      </div>
      <div className="down__arrow animate__animated animate__bounce" >
        <a href="#aboutme" >
          <img src={DownArrow} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Home;
