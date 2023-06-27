import { configureStore } from "@reduxjs/toolkit";
import peoples from "./slice";

export const store = configureStore({
    reducer: {
        peoples,
    },
});
