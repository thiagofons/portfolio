import GitHubLogo from "../../assets/icons/github-light.svg";
import InstagramLogo from "../../assets/icons/instagram-light.svg";
import LinkedinLogo from "../../assets/icons/linkedin-light.svg";

import "../../styles/components/footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="contact__data">
        <header>
          <h1>Thiago Arruda</h1>
        </header>
        <main>
          <span>+55 21 96505-9393</span>
          <span>thiagofa2506@gmail.com</span>
          <div className="social">
            <a href="https://github.com/thiagofons">
              <img src={GitHubLogo} alt="" className="social__icon" />
            </a>
            <a href="https://www.instagram.com/thiagofons_">
              <img src={InstagramLogo} alt="" className="social__icon" />
            </a>
            <a href="https://www.linkedin.com/in/thiagofons">
              <img src={LinkedinLogo} alt="" className="social__icon" />
            </a>
          </div>
        </main>
      </section>
      <section className="bottom">
        <section className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </section>
        <section className="rights">
          <p>&copy; All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
