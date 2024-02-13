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
                state.menuCategories = {}; //! This breaks the useEffect[menuCategories] (infinite loop) to get the categories from the App.js
            })*/
            .addCase(getAllCategories.fulfilled, (state, action) => {
                const categories = action.payload;
                const newCategories = {};

                Object.entries(categories).forEach(
                    ([categoryName, category]) => {
                        // Clone the category and assign a new UUID to it
                        const newCategory = {
                            ...category,
                            id: uuidv4(),
                            data: [],
                        };

                        // If the category has items, clone each item and assign a new UUID to it
                        if (category.data && category.data.length > 0) {
                            newCategory.data = category.data.map((item) => ({
                                ...item,
                                id: uuidv4(),
                            }));
                        }

                        // Add the modified category to the newCategories object
                        newCategories[categoryName] = newCategory;
                    }
                );

                // Update the state with the newCategories object
                state.menuCategories = newCategories;
            });
    },
});

export const { addItemToCart, removeItemFromCart, removeAllFromCart } =
    menuSlice.actions;

export default menuSlice.reducer;
