import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../../services/carApi"; 

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const newData = action.payload.filter(
          (car) => !state.items.some((item) => item.id === car.id)
        );
        state.items = [...state.items, ...newData];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
