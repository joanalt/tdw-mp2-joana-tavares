import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Nav, Logo, Options } from "./StyledComponents";

function Header() {
  return (
    <div>
      <Nav>
        <Options>
          <li>
            <Link to="/">
              <Logo alt="logo" src={logo} />
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
