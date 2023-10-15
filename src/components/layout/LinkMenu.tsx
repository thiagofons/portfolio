import NavLink from "./NavLink";

import "../../styles/components/menu.sass";

const LinkMenu = () => {
  return (
    <section className="link__menu">
      <header>
        <h1>Thiago Arruda</h1>
      </header>
      <main>
        <NavLink text="Home" to="#home" />
        <NavLink text="About" to="#aboutme" />
        <NavLink text="Tech Stack" to="#projects" />
        <NavLink text="Projects" to="#contact" />
        <NavLink text="Contact" to="#contact" />
      </main>
      
    </section>
  );
};

export default LinkMenu;
