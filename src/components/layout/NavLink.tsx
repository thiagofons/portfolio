import "../../styles/main.sass"

type NavLinkProps = {
  text: string;
  to: string;
  active: true | false;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <a className={`nav__link ${props.active ? "nav__link__active" : ""}`} href={props.to}>
      {props.text}
    </a>
  );
};

export default NavLink;
