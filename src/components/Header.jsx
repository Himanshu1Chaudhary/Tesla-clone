import React from "react";
import logo from "../images/logo.svg";
import "./Header.css";
import Menu from "./Menu";
import MenuIcon from "@mui/icons-material/Menu";


function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="">
          {" "}
          <img src={logo} alt="" />{" "}
        </a>
      </div>
      <div className="left_menu">
        <Menu title="MODEL S" />
        <Menu title="MODEL Y" />
        <Menu title="MODEL X" />
        <Menu title="MODEL 3" />
      </div>
      <div className="rigth_menu">
        <a href="#">SHOP</a>
        <a href="#">TESLA ACCOUNT</a>

        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
