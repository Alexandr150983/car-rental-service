import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const car = action.payload;
      const exists = state.favorites.some(
        (favoriteCar) => favoriteCar.id === car.id
      );
      if (!exists) {
        state.favorites.push(car);
      }
    },
    removeFavorite: (state, action) => {
      const carId = action.payload;
      state.favorites = state.favorites.filter(
        (favoriteCar) => favoriteCar.id !== carId
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
