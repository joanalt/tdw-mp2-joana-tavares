import React from "react";
import { Link } from "react-router-dom";
import { Nav, Options, Titulo } from "./StyledComponents";

function Header() {
  return (
    <div>
      <Nav>
        <Options>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Detalhes">Detalhes</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </Options>
      </Nav>

      <header>
        <Titulo>Pickle Rick welcomes you</Titulo>
      </header>
    </div>
  );
}

export default Header;
