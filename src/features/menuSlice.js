import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

export const getAllCategories = createAsyncThunk(
    "menu/getAllCategories",
    async () => {
        // Simular una llamada asíncrona a una API o servicio
        return new Promise((resolve) => {
            resolve(menuData);
        });
    }
);

const initialState = {
    menuCategories: {},
    cartItems: [],
    isLoggedIn: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            state.cartItems.push(item);
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.menuCategories = {};
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.menuCategories = action.payload;
            });
    },
});

export const { addItemToCart, setLoggedIn } = menuSlice.actions;

export default menuSlice.reducer;
