import { useContext } from "react";
import NavLink from "./NavLink";
import { NavContext } from "../controllers/NavContext";

const NavBar = () => {
  const { page, setPage } = useContext(NavContext);

  return (
    <nav className="navbar">
      <div className="links">
        <NavLink text="Home" to="#home" active={page === "home"} />
        <NavLink text="About Me" to="#aboutme" active={page === "aboutme"} />
        <NavLink text="Projects" to="#projects" active={page === "projects"} />
        <NavLink text="Contact" to="#contact" active={page === "contact"} />
      </div>
    </nav>
  );
};

export default NavBar;
