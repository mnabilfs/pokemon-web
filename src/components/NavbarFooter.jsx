import React from "react";
import Footers from "./Footers";
import Navbars from "./Navbars";
import { Outlet } from "react-router-dom";

const NavbarFooter = () => {
  return (
    <div>
      <Navbars />
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <Footers />
    </div>
  );
};

export default NavbarFooter;
