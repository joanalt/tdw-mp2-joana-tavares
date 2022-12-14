import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import titulo from "../images/RickandMorty.png";
import crying from "../images/crying.png";
import {
  Titulo,
  Input,
  Search,
  Personagens,
  Background,
  Nome,
  Status,
  Alive,
  Dead,
  Unknown,
  Botoes,
  Botao,
  Foto,
  Error404,
} from "./StyledComponents.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersAsync,
  selectCharacters,
} from "../redux/charactersSlice";

function Conteudo() {
  const characters = useSelector(selectCharacters);
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
      <Titulo alt="Rick and Morty" src={titulo} />
      <Botoes>
        <form onSubmit={searchCharacter}>
          <Input id="search" />
          <Search type="submit">Search</Search>
        </form>
      </Botoes>
      {characters.status === "error" ? (
        <div>
          <Error404 alt="404 not found" src={crying} />
        </div>
      ) : (
        <Personagens>
          {characters.characters[search] != null &&
            characters.characters[search][page] != null &&
            characters.characters[search][page].map((character) => {
              return (
                <Background key={character.id}>
                  <Link
                    to={`/Detalhes/${character.id}`}
                    state={{ data: character }}
                  >
                    <Foto src={character.image} alt={character.name} />
                  </Link>
                  <Nome>{character.name}</Nome>
                  <Status>
                    {character.status === "Alive" && <Alive />}
                    {character.status === "Dead" && <Dead />}
                    {character.status === "unknown" && <Unknown />}
                    <p>{character.status}</p>
                  </Status>
                </Background>
              );
            })}
        </Personagens>
      )}
      <Botoes>
        {page > 1 && <Botao onClick={previous}>Previous</Botao>}
        {characters.characters[search] != null &&
          characters.characters[search][0] != null &&
          page < characters.characters[search][0] && (
            <Botao onClick={next}>Next</Botao>
          )}
      </Botoes>
    </>
  );
}

export default Conteudo;
