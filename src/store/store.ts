import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { menuSlice } from "../features/menuSlice.ts";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
