import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  priceRange: { min: 0, max: 10000 },
  mileageRange: { min: 0, max: 200000 },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setMileageRange: (state, action) => {
      state.mileageRange = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setBrand, setPriceRange, setMileageRange, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
