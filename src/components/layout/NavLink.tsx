import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import "../../styles/main.sass"

type NavLinkProps = {
  text: string;
  to: string;
};

const NavLink = (props: NavLinkProps) => {
  const {openMenu, setOpenMenu} = useContext(PortfolioContext);
  
  return (
    <a className="nav__link" href={props.to} onClick={(e) => setOpenMenu(!openMenu)}>
      {props.text}
    </a>
  );
};

export default NavLink;
