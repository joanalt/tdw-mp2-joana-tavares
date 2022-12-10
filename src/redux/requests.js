import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(value, page) {
  try {
    const response = await axios.get(URL + `/?name=${value}&page=${page}`);

    return await { response: response.data.results, info: response.data.info };
  } catch (error) {
    return { error: true };
  }
}
