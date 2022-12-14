import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(value, page) {
  try {
    const response = await axios.get(URL + `/?name=${value}&page=${page}`);

    return { response: response.data.results, info: response.data.info };
  } catch (error) {
    return { error: true };
  }
}

export async function fetchCharacter(id) {
  try {
    const response = await axios.get(URL + `/${id}`);

    return { response: response.data.results, info: response.data.info };
  } catch (error) {
    return { error: true };
  }
}
