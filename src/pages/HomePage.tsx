import "../styles/main.sass";

import ProfilePic from "../assets/images/profile-pic.jpg";

const HomePage = () => {
  return (
    <section className="home section">
      <div className="text">
        <p>
          Hi 👋,<br></br>I am
          <span className="highlight"> Thiago</span>
          <br></br>A <span className="float">&lt;front-end&gt;</span>
          <br></br>
          developer<br></br>
        </p>
      </div>
      <div className="image">
        <img src={ProfilePic} alt="" />
      </div>
    </section>
  );
};

export default HomePage;
