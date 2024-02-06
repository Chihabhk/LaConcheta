import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";

export const getAllCategories = createAsyncThunk(
    "menu/getAllCategories",
    async () => {
        // Simular una llamada asíncrona a una API o servicio
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(menuData);
            }, 1000);
        });
    }
);

const initialState = {
    menuCategories: {},
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    isLoggedIn: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeItemFromCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    const index = state.cartItems.findIndex(
                        (cartItem) => cartItem.name === item.name
                    );
                    if (index >= 0) state.cartItems.splice(index, 1);
                }
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                // state.menuCategories = {}; //! This breaks the useEffect (infinite loop) to get the categories from the App.js
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.menuCategories = action.payload;
            });
    },
});

export const { addItemToCart, setLoggedIn, removeItemFromCart } =
    menuSlice.actions;

export default menuSlice.reducer;
