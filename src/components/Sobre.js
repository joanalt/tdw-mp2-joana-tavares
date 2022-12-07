import React from "react";
import Header from "./Header";
import { Titulo } from "./StyledComponents";

function Sobre() {
  return (
    <>
      <Header />
      <Titulo>Sobre</Titulo>
      <h3>Copyright?</h3>
      <p>
        Rick and Morty is created by Justin Roiland and Dan Harmon for Adult
        Swim. The data and images are used without claim of ownership and belong
        to their respective owners.
      </p>
    </>
  );
}

export default Sobre;
