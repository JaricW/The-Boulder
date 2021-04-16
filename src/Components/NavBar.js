import React from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <>
      <ul className="nav">
        <div className="openMenu">
          <p className="button">Menu</p>
        </div>
        <Link
          className="link navContent"
          to="theBoulder"
          smooth={true}
          duration={500}
        >
          The Boulder
        </Link>
        <li className="link navContent" onClick={props.openRegistration}>
          Register
        </li>
        <Link
          className="link navContent"
          to="info"
          smooth={true}
          duration={500}
          offset={-30}
        >
          Info
        </Link>
        <Link
          className="link navContent"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact Us
        </Link>
      </ul>
    </>
  );
};

export default NavBar;
