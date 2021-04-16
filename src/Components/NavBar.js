import React from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          gap: "40px",
          position: "fixed",
          zIndex: "2",
          backgroundColor: "rgba(159, 163, 162, 0.6)",
          width: "100%",
          margin: "0",
        }}
      >
          <Link className="link" 
        to="theBoulder" 
        smooth={true} 
        duration={500}>The Boulder</Link>
        <li className="link" onClick={props.openRegistration}>Register</li>
        <Link className="link" 
        to="info" 
        smooth={true} 
        duration={500}
        offset={-30}
        >Info</Link>
        <Link className="link" 
        to="contact" 
        smooth={true} 
        duration={500}>
          Contact Us
        </Link>
      </ul>
    </>
  );
};

export default NavBar;
