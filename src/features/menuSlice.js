import { createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

const initialState = {
    menuCategories: {},
    cartItems: [],
    isLoggedIn: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        getAllCategories: (state) => {
            state.menuCategories = menuData;
        },
        addItemToCart: (state, action) => {
            const item = action.payload;
            state.cartItems.push(item);
        },
        setLogginIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { getAllCategories, addItemToCart, setLogginIn } =
    menuSlice.actions;

export default menuSlice.reducer;
