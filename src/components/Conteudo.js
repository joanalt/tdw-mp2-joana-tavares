import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import {
  Titulo,
  Personagens,
  Background,
  Nome,
  Status,
  Circulo,
  Botoes,
} from "./StyledComponents";

function Conteudo() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
      setCharacters(response.data.results);
      //console.log(response.data.results)
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Titulo alt="Rick and Morty" src="/images/RickandMorty.png" />
      <Botoes>
        <button>Alive</button>
        <button>Dead</button>
      </Botoes>
      <Personagens>
        {characters.map((character) => (
          <Background key={character.id}>
            <img src={character.image} alt={character.name} />
            <Nome>{character.name}</Nome>
            <Status>
              <Circulo />
              <p>{character.status}</p>
            </Status>
          </Background>
        ))}
      </Personagens>
      <Botoes>
        <button>Previous</button>
        <button>Next</button>
      </Botoes>
    </>
  );
}

export default Conteudo;
