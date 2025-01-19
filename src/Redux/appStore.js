import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice.js";

//creating/configuring a store in RTK
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
