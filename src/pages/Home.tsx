import DownArrow from "../img/down-arrow.svg"
import "../styles/main.sass"

const Home = () => {
  return (
    <header id="home" className="home section">
      <div className="hello">
        <h1>
          Hi!
          <br />
          I'm Thiago
        </h1>
        <div className="description">
          <h2>
            your next
            <br />
            <span className="role">Front-End Developer</span>
          </h2>
        </div>
      </div>
      <div className="down__arrow">
        <img src={DownArrow} alt="" />
      </div>
    </header>
  );
};

export default Home;