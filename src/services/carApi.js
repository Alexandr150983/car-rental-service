import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({
    brand,
    priceMin,
    priceMax,
    mileageMin,
    mileageMax,
    page = 1,
    limit = 12,
  }) => {
    let query = `page=${page}&limit=${limit}`;
    if (brand) {
      query += `&brand=${brand}`;
    }
    if (priceMin !== undefined && priceMax !== undefined) {
      query += `&price_gte=${priceMin}&price_lte=${priceMax}`;
    }
    if (mileageMin !== undefined && mileageMax !== undefined) {
      query += `&mileage_gte=${mileageMin}&mileage_lte=${mileageMax}`;
    }

    const response = await axios.get(
      `https://65cc753edd519126b83e8072.mockapi.io/adverts?${query}`
    );
    return response.data;
  }
);
