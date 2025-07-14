// Libraries
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// My Creations
import type { User } from "../../types/user";

interface FavoritesState {
  list: User[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<User>) {
      const exists = state.list.find((u) => u.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
