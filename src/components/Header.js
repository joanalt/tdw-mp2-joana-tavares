import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Nav, Options } from "./Styles.jsx";

function Header() {
  return (
    <div>
      <Nav>
        <Options>
          <li>
            <Link to="/">
              <img alt="logo" src={logo} style={{ width: "75px" }} />
            </Link>
          </li>
          <li>
            <Link to="/Sobre">About</Link>
          </li>
        </Options>
      </Nav>
    </div>
  );
}

export default Header;
