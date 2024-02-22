import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MenuState } from "../types";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
    const response = await fetch("../db/menu.json");
    return await response.json();
});

const initialState = {
    menuCategories: [],
    cartItems: JSON.parse(localStorage.getItem("cartItems") as string) || [],
    loading: "idle",
} satisfies MenuState as MenuState;

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === item.id
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
                (cartItem) => cartItem.id === item.id
            );
            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity <= 0) {
                    const index = state.cartItems.findIndex(
                        (cartItem) => cartItem.id === item.id
                    );
                    if (index >= 0) state.cartItems.splice(index, 1);
                }
            }
            if (state.cartItems.length === 0) {
                localStorage.removeItem("cartItems");
            } else {
                localStorage.setItem(
                    "cartItems",
                    JSON.stringify(state.cartItems)
                );
            }
        },
        removeAllFromCart: (state, action) => {
            const itemsToRemove = action.payload;
            state.cartItems = state.cartItems.filter(
                (cartItem) =>
                    !itemsToRemove.find((item) => item.id === cartItem.id)
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder
            /*.addCase(getAllCategories.pending, (state) => {
                state.menuCategories = {}; //! This breaks the useEffect[menuCategories] (infinite loop) to get the categories from the App.ts
            })*/
            .addCase(fetchMenu.fulfilled, (state, action) => {
                return action.payload;
            });
    },
});

export const { addItemToCart, removeItemFromCart, removeAllFromCart } =
    menuSlice.actions;

export default menuSlice.reducer;
