import "../../styles/main.sass"

type NavLinkProps = {
  text: string;
  to: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <a className="nav__link" href={props.to}>
      {props.text}
    </a>
  );
};

export default NavLink;
