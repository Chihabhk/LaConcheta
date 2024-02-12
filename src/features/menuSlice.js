import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuData from "../db/menu.json";
import { v4 as uuidv4 } from "uuid";

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
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
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
                    !itemsToRemove.find((item) => item.name === cartItem.name)
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder
            /*.addCase(getAllCategories.pending, (state) => {
                state.menuCategories = {}; //! This breaks the useEffect[menuCategories] (infinite loop) to get the categories from the App.js
            })*/
            .addCase(getAllCategories.fulfilled, (state, action) => {
                let categories = action.payload;
                categories = Object.values(categories)
                    .map((category) => {
                        let id = uuidv4();
                        return { ...category, id };
                    })
                    .flatMap((category) => {
                        return (category.items = category.items.map((item) => {
                            let id = uuidv4();
                            return { ...item, id };
                        }));
                    });
                state.menuCategories = categories;
            });
    },
});

export const { addItemToCart, removeItemFromCart, removeAllFromCart } =
    menuSlice.actions;

export default menuSlice.reducer;
