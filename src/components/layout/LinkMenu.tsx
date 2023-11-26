import NavLink from "./NavLink";

import "../../styles/components/menu.sass";
import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { AiOutlineClose } from "react-icons/ai";
import { Switch, colors } from "@mui/material";

import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";

const LinkMenu = () => {
  const { openMenu, setOpenMenu, lang, setLang } = useContext(PortfolioContext);

  return (
    <section className={`link__menu ${openMenu ? "show__menu" : ""}`}>
      <header>
        <h1>Thiago Arruda</h1>
        <AiOutlineClose
          className="close__icon"
          onClick={(e) => setOpenMenu(!openMenu)}
        />
      </header>
      <main>
        <NavLink text="Home" to="#" />
        <NavLink text="About Me" to="#aboutme" />
        <NavLink text="My Tech Stack" to="#techstack" />
        <NavLink text="Projects" to="#projects" />
        <NavLink text="Contact" to="#contact" />
      </main>
      <footer>
        <img src={BrazilFlag} className="flag" alt="" />
        <Switch defaultChecked={lang === "en" ? true : false} checked={true} />
        <img src={UsaFlag} className="flag" alt="" />
      </footer>
    </section>
  );
};

export default LinkMenu;
