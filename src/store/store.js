import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "./features/loremSlice";


const store = configureStore({
    reducer: {
        lorem: loremSlice.reducer,
    },
});

export default store;