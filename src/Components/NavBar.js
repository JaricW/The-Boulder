import React from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <>
      <ul className="fixed z-20 p-0 flex gap-4 md:w-full  md:bg-black md:bg-opacity-60 hover:bg-black md:hover:bg-opacity-60 flex-col md:flex-row group ">
        <button className="md:hidden w-28 m-4 text-yellow-500 bg-black p-2 border-2 border-current rounded-md hover:bg-yellow-500 hover:text-black hover:border-current">Menu</button>
        <Link
          className="text-yellow-500 p-2 m-2 cursor-pointer z-0 hidden md:block group-hover:block  hover:bg-yellow-500 hover:text-black hover:border-current rounded-md hover:border-2"
          to="theBoulder"
          smooth={true}
          duration={500}
        >
          The Boulder
        </Link>
        <li className="text-yellow-500 p-2 m-2 cursor-pointer hidden md:block group-hover:block z-50 hover:bg-yellow-500 hover:text-black hover:border-current rounded-md hover:border-2" onClick={props.openRegistration}>
          Register
        </li>
        <Link
          className="text-yellow-500 p-2 m-2 cursor-pointer hidden md:block group-hover:block hover:bg-yellow-500 hover:text-black hover:border-current rounded-md hover:border-2"
          to="info"
          smooth={true}
          duration={500}
          offset={-30}
        >
          Info
        </Link>
        <Link
          className="text-yellow-500 p-2 m-2 cursor-pointer hidden md:block group-hover hover:bg-yellow-500 hover:text-black hover:border-current rounded-md hover:border-2"
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
