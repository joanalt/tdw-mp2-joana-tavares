import React from "react";
import Header from "./Header";
import { Oooweee, Subtitulo, Texto, About } from "./StyledComponents";

function Sobre() {
  return (
    <>
      <Header />
      <About>
        <Oooweee alt="oooweee" src="/images/oooweee.png" />
        <div>
          <Subtitulo>About</Subtitulo>
          <Texto>
            Rick and Morty was created by Dan Harmon and Justin Roiland for
            Adult Swim. This is an animated series that follows the exploits of
            a super scientist and his not-so-bright grandson.
          </Texto>
          <Subtitulo>Copyright</Subtitulo>
          <Texto>
            The data and images are used without claim of ownership and belong
            to their respective owners.
          </Texto>
        </div>
      </About>
    </>
  );
}

export default Sobre;
