import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let product = state.basket.find((item) => item.id === action.payload.id)
            if (product) {
                return
            }
            else {
                state.basket.push(action.payload)
            }

        },
        deleteProduct: (state, action) => {
            state.basket = state.basket.filter((product) => product.id !== action.payload)
        }
    }
})

export const { addProduct, deleteProduct } = basketSlice.actions;

export const getBasketProducts = (state) => state.basket.basket;

export default basketSlice.reducer