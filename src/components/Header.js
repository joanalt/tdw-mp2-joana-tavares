import React from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, Options } from "./StyledComponents";

function Header() {
  return (
    <div>
      <Nav>
        <Options>
          <li>
            <Link to="/">
              <Logo alt="logo" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <Link to="/Detalhes">Detalhes</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </Options>
      </Nav>
    </div>
  );
}

export default Header;
