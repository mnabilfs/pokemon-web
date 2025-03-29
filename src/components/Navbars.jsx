"use client";

import ReactLogo from "../assets/react.svg";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={ReactLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pokemon</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/">
          Rating
        </Navbar.Link>
        <Navbar.Link as={Link} to="/">
          About
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars
