import { AiOutlineMenu } from "react-icons/ai";

import "../../styles/components/navbar.sass";
import LinkMenu from "./LinkMenu";

import GitHubLight from "../../assets/icons/github-light.svg";
import InstagramLight from "../../assets/icons/instagram-light.svg";
import LinkedinLight from "../../assets/icons/linkedin-light.svg";
import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";

const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(PortfolioContext);

  return (
    <nav id="home" className="navbar">
      <section className="nav__header">
        <AiOutlineMenu
          className="menu__icon"
          onClick={() => setOpenMenu(!openMenu)}
          color=""
        />
        <h1>Thiago Arruda</h1>
      </section>
      <section className="nav__body">
        <LinkMenu />
        <section className="lang__sel"></section>
        <section className="social">
          <a href="https://github.com/thiagofons" target="_blank" rel="noreferrer">
            <img src={GitHubLight} alt="" />
          </a>
          <a href="https://www.instagram.com/thiagofons_/" target="_blank" rel="noreferrer">
            <img src={InstagramLight} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/thiagofons/" target="_blank" rel="noreferrer">
            <img src={LinkedinLight} alt="" />
          </a>
        </section>
      </section>
    </nav>
  );
};

export default NavBar;
