import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.basket.push(action.payload)
        }
    }
})

export const { addProduct } = basketSlice.actions;

export const getBasketProducts = (state) => state.basket.basket;

export default basketSlice.reducer