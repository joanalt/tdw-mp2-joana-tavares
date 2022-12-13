import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./requests";

const initialState = {
  status: "idle",
  characters: {},
};

export const fetchCharactersAsync = createAsyncThunk(
  "characters/fetchCharacters",
  async (info) => {
    const response = await fetchCharacters(info.text, info.page);
    return {
      response: response.response,
      info: response.info,
      value: info.text,
      page: info.page,
    };
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        if (action.payload.error || action.payload.response == null) {
          state.status = "error";
        } else {
          const newCharacters =
            state.characters[action.payload.value] != null
              ? [...state.characters[action.payload.value]]
              : [];
          if (newCharacters[0] == null) {
            newCharacters[0] = action.payload.info.pages;
          }
          newCharacters[action.payload.page] = action.payload.response;
          state.status = "idle";
          state.characters[action.payload.value] = newCharacters;
        }
      });
  },
});

export const selectCharacters = (state) => state.characters;

export default charactersSlice.reducer;
