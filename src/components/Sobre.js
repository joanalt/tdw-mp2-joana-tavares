import React from "react";
import Header from "./Header";
import sobre from "../images/about.jpg";
import { Oooweee, Subtitulo, Texto, About } from "./StyledComponents";

function Sobre() {
  return (
    <>
      <Header />
      <About>
        <Oooweee alt="oooweee" src={sobre} />
        <div>
          <Subtitulo>About</Subtitulo>
          <Texto>
            Rick and Morty, created by Dan Harmon and Justin Roiland for Adult
            Swim, is an animated series that follows the misadventures of
            cynical mad scientist Rick Sanchez and his good-hearted but
            not-so-bright grandson Morty Smith. They split their time between
            domestic life and interdimensional adventures that take place across
            an infinite number of realities, often travelling to other planets
            and dimensions through portals and on Rick's flying saucer. The
            general concept of Rick and Morty relies on two conflicting
            scenarios: domestic family drama, and an alcoholic grandfather
            dragging his grandson into hijinks.
          </Texto>
          <Subtitulo>Info for geeks</Subtitulo>
          <Texto>
            Rick and Morty has 826 characters that can be seen over 6 season.
            Yes, over 60 episodes of pure adventure!!!! The first episode aired
            on December 2nd of 2013 and the last one (for now we hope) aired 9
            years and 1 day later, on December 4th of 2022.
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
