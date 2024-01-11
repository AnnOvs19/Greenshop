import { createSlice } from '@reduxjs/toolkit';
import productsArray from "./products.json";

const initialState = {
    products: productsArray
}

export const catalogSlice = createSlice({
    name: "catalog",
    initialState
})

export const getProducts = (state) => state.products.products;

export default catalogSlice.reducer


