import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesSlice";
import categoriesReducer from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        categories: categoriesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
