import NavLink from "./NavLink";

import "../../styles/components/menu.sass";
import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import {AiOutlineClose} from "react-icons/ai";

const LinkMenu = () => {
  const {openMenu, setOpenMenu} = useContext(PortfolioContext);

  return (
    <section className={`link__menu ${openMenu ? "show__menu" : ""}`}>
      <header>
        <h1>Thiago Arruda</h1>
        <AiOutlineClose className="close__icon" onClick={(e) => setOpenMenu(!openMenu)}/>
      </header>
      <main>
        <NavLink text="Home" to="#home" />
        <NavLink text="About Me" to="#aboutme" />
        <NavLink text="My Tech Stack" to="#techstack" />
        <NavLink text="Projects" to="#projects" />
        <NavLink text="Contact" to="#contact" />
      </main>
      
    </section>
  );
};

export default LinkMenu;
