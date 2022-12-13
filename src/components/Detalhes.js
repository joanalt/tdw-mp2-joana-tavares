import React from "react";
import Header from "./Header";
import { useParams /*useLocation*/ } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Foto,
  Nome,
  Alive,
  Dead,
  Unknown,
  Status,
  Personagens,
} from "./StyledComponents";
import { selectCharacters } from "../redux/charactersSlice";

function Detalhes() {
  const characters = useSelector(selectCharacters);
  const { id } = useParams();
  /*const location = useLocation();
  const character = location.state;*/

  const character = characters.characters[""][~~(id / 20) + 1][(id % 20) - 1];
  console.log(characters.characters[""][~~(id / 20) + 1][(id % 20) - 1]);

  //criar um novo atributo no estado do redux para guardar a info das personagens individualmente

  if (character != null)
    return (
      <>
        <Header />
        <Personagens>
          <div key={id}>
            <Foto src={character.image} alt={character.name} />
            <div>
              <Nome>{character.name}</Nome>
              <Status>
                {character.status === "Alive" && <Alive />}
                {character.status === "Dead" && <Dead />}
                {character.status === "unknown" && <Unknown />}
                <p>{character.status}</p>
              </Status>
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
          </div>
        </Personagens>
      </>
    );
  else return null;
}

export default Detalhes;
