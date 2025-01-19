import { createSlice } from "@reduxjs/toolkit";

//creating a slick in RTK
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            //or
            //return {items = []};
        },
    },
});

// console.log(cartSlice);
export const { addItems, removeItems, clearCart } = cartSlice.actions; //It is exported to perform action in app/
export default cartSlice.reducer; // It is exported to add slice in appStore
