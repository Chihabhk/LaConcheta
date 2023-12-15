import { createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

const initialState = {
    menuCategories: {},
    menuItems: [],
    selectedCategory: {},
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        getAllCategories: (state) => {
            state.menuCategories = Object.entries(menuData);
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload.data;
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

export const { getAllCategories, getMenuItemsByCategory, selectCategory } =
    menuSlice.actions;

export default menuSlice.reducer;
