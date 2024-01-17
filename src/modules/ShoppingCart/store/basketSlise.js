import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let product = state.basket.find((item) => item.id === action.payload.id);
            // Для отсутствия дублирования карточек
            if (product) {
                return
            }
            else {
                action.payload = { ...action.payload, quantity: 1 };
                state.basket.push(action.payload)
                // Для добавления продукта в массив
            }
        },

        deleteProduct: (state, action) => {
            // action.payload = приходящий id продукта
            state.basket = state.basket.filter((product) => product.id !== action.payload)

        },

        addCount: (state, action) => {
            state.basket.find((product) => {
                if (product.id === action.payload) {
                    product.quantity += 1;
                }
            })
        },

        removeCount: (state, action) => {
            state.basket.find((product) => {
                if (product.id === action.payload) {
                    product.quantity -= 1;
                }

                if (product.quantity === 0) {
                    state.basket = state.basket.filter((product) => product.id !== action.payload);
                    // Если id продукта не равно приходящему id, то продукт остаётся в массиве. Если равно - то удаляется
                }
            })

        },

    }
})

export const { addProduct, deleteProduct, addCount, removeCount } = basketSlice.actions;

export const getBasketProducts = (state) => state.basket.basket;

export default basketSlice.reducer