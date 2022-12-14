import React from "react";
import Header from "./Header";
import sobre from "../images/about.jpg";
import { Oooweee, Subtitulo, Texto } from "./Styles.jsx";

function Sobre() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <Oooweee alt="oooweee" src={sobre} />
        <div>
          <Subtitulo>About the show</Subtitulo>
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
          <Subtitulo>About the project</Subtitulo>
          <Texto>
            Over time, Internet is increasingly focused on aspects of
            information, rather than its production. For the Curricular Unit of
            Technologies and Web Development, students were challenged to create
            a front-end application in React.js to consume and visualize
            information from any public data source, at their choice. For this
            project I used Rick and Morty API and the technologies I used for
            this challenge were: React, React Router, Axious and Redux toolkit.
          </Texto>
          <Subtitulo>Copyright</Subtitulo>
          <Texto>
            The data and images are used without claim of ownership and belong
            to their respective owners.
          </Texto>
        </div>
      </div>
    </>
  );
}

export default Sobre;
