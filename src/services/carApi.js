import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12 }) => {
    let query = `page=${page}&limit=${limit}`;

    const response = await axios.get(
      `https://65cc753edd519126b83e8072.mockapi.io/adverts?${query}`
    );
    return response.data;
  }
);
