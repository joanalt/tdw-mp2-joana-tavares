import React from "react";
import Header from "./Header";
import { useParams, useLocation } from "react-router-dom";
import {
  Fundo,
  BgDetalhes,
  Alive,
  Dead,
  Unknown,
  Personagens,
} from "./Styles.jsx";

function Detalhes() {
  const { id } = useParams();
  const location = useLocation();
  const character = location.state;

  if (character != null)
    return (
      <>
        <Header />
        <Fundo>
          <Personagens>
            <BgDetalhes key={id}>
              <img
                src={character.data.image}
                alt={character.data.name}
                style={{ width: "100%" }}
              />
              <div style={{ marginLeft: "30px" }}>
                <h1>{character.data.name}</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {character.data.status === "Alive" && <Alive />}
                  {character.data.status === "Dead" && <Dead />}
                  {character.data.status === "unknown" && <Unknown />}
                  <p>{character.data.status}</p>
                </div>
                <p>
                  <b>Species: </b>
                  {character.data.species}
                </p>
                <p>
                  <b>Type: </b>
                  {character.data.type}
                </p>
                <p>
                  <b>Gender: </b>
                  {character.data.gender}
                </p>
                <p>
                  <b>Origin: </b>
                  {character.data.origin.name}
                </p>
                <p>
                  <b>Last known location: </b>
                  {character.data.location.name}
                </p>
              </div>
            </BgDetalhes>
          </Personagens>
        </Fundo>
      </>
    );
  else return null;
}

export default Detalhes;
