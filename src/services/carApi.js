import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchAllCars", async () => {
  const response = await axios.get(
    `https://65cc753edd519126b83e8072.mockapi.io/adverts`
  );
  return response.data;
});
