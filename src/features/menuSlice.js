import { createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

const initialState = {
    menuCategories: {},
    menuItems: [],
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
    },
});

export const { getAllCategories, getMenuItemsByCategory } = menuSlice.actions;

export default menuSlice.reducer;
