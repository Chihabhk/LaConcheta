import { createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

const initialState = {
    menuCategories: {},
    menuItems: [],
    isLoggedIn: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        getAllCategories: (state) => {
            state.menuCategories = Object.entries(menuData);
        },
        getMenuItemsByCategory: (state, action) => {
            const category = action.payload;

            if (menuData.hasOwnProperty(category)) {
                state.menuItems = menuData[category].data;
            } else {
                state.menuItems = [];
            }
        },
        setLogginIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { getAllCategories, getMenuItemsByCategory, setLogginIn } =
    menuSlice.actions;

export default menuSlice.reducer;
