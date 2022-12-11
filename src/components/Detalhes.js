import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { selecteCharacters } from "../redux/charactersSlice";

function Detalhes() {
  const characters = useSelector(selecteCharacters);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Detalhes;
