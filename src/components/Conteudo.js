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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersAsync,
  selecteCharacters,
} from "../redux/charactersSlice";

function Conteudo() {
  const characters = useSelector(selecteCharacters);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (
      characters.characters[search] == null ||
      characters.characters[search][1] == null
    )
      dispatch(fetchCharactersAsync({ text: search, page: 1 }));
  }, []);

  function next() {
    setPage(page + 1);
    if (
      characters.characters[search] == null ||
      characters.characters[search][page + 1] == null
    )
      dispatch(fetchCharactersAsync({ text: search, page: page + 1 }));
  }

  function previous() {
    setPage(page - 1);
    if (
      characters.characters[search] == null ||
      characters.characters[search][page - 1] == null
    )
      dispatch(fetchCharactersAsync({ text: search, page: page - 1 }));
  }

  function searchCharacter(e) {
    e.preventDefault();
    const searchElement = document.getElementById("search");
    const value = searchElement.value;
    setSearch(value);
    setPage(1);
    if (
      characters.characters[value] == null ||
      characters.characters[value][1] == null
    )
      dispatch(fetchCharactersAsync({ text: value, page: 1 }));
  }

  return (
    <>
      <Header />
      <Titulo alt="Rick and Morty" src="/images/RickandMorty.png" />
      <Botoes>
        <form onSubmit={searchCharacter}>
          <input id="search" />
          <button type="submit">Search</button>
        </form>
      </Botoes>
      {characters.status == "error" ? (
        <h1>404 not found</h1>
      ) : (
        <Personagens>
          {characters.characters[search] != null &&
            characters.characters[search][page] != null &&
            characters.characters[search][page].map((character) => {
              return (
                <Background key={character.id}>
                  <img src={character.image} alt={character.name} />
                  <Nome>{character.name}</Nome>
                  <Status>
                    <Circulo />
                    <p>{character.status}</p>
                  </Status>
                </Background>
              );
            })}
        </Personagens>
      )}
      <Botoes>
        {page > 1 && <button onClick={previous}>Previous</button>}
        {characters.characters[search] != null &&
          characters.characters[search][0] != null &&
          page < characters.characters[search][0] && (
            <button onClick={next}>Next</button>
          )}
      </Botoes>
    </>
  );
}

export default Conteudo;
