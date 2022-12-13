import React from "react";
import Header from "./Header";
import { useParams, useLocation } from "react-router-dom";
//import { useSelector } from "react-redux";
import {
  FotoD,
  Alive,
  Dead,
  Unknown,
  StatusD,
  Personagens,
  BgDetalhes,
  BgPagD,
} from "./StyledComponents";
//import { selectCharacters } from "../redux/charactersSlice";

function Detalhes() {
  //const characters = useSelector(selectCharacters);
  const { id } = useParams();
  const location = useLocation();
  const character = location.state;

  /*const character = characters.characters[""][~~(id / 20) + 1][(id % 20) - 1];
  console.log(characters.characters[""][~~(id / 20) + 1][(id % 20) - 1]);

  //criar um novo atributo no estado do redux para guardar a info das personagens individualmente*/

  if (character != null)
    return (
      <>
        <BgPagD>
          <Header />
          <Personagens>
            <BgDetalhes key={id}>
              <FotoD src={character.data.image} alt={character.data.name} />
              <div style={{ marginLeft: "30px" }}>
                <h1>{character.data.name}</h1>
                <StatusD>
                  {character.data.status === "Alive" && <Alive />}
                  {character.data.status === "Dead" && <Dead />}
                  {character.data.status === "unknown" && <Unknown />}
                  <p>{character.data.status}</p>
                </StatusD>
                <p>
                  <b>Species:</b>
                  {character.species}
                </p>
                <p>
                  <b>Type:</b> {character.type}
                </p>
                <p>
                  <b>Gender:</b> {character.gender}
                </p>
                <p>
                  <b>Origin:</b> {character.origin}
                </p>
                <p>
                  <b>Last known location:</b> {character.location}
                </p>
              </div>
            </BgDetalhes>
          </Personagens>
        </BgPagD>
      </>
    );
  else return null;
}

export default Detalhes;
