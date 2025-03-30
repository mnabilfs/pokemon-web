import React from "react";
import Footers from "./Footers";
import Navbars from "./Navbars";

const NavbarFooter = () => {
  return (
    <div>
      <Navbars />
      <div className="h-screen"></div>
      <Footers />
    </div>
  );
};

export default NavbarFooter;
