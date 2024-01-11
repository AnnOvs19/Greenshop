import { configureStore } from '@reduxjs/toolkit';
import catalog from "../modules/Catalog/store/catalogSlice";
import shopingCart from "../modules/ShoppingCart/store/basketSlise";


export const store = configureStore({
    reducer: {
        products: catalog,
        basket: shopingCart
    },
})