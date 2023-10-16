import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    value: 1,
};

// Create a slice using createSlice
const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Reducer function for increasing the value
        increase: (state) => {
            state.value += 1;
        },
        // Reducer function for decreasing the value
        decrease: (state) => {
            state.value -= 1;
        },
        // Reducer function for increasing the value by a specific amount
        increaseBy: (state, action) => {
            console.log("the number will increase by : ",action.payload)
            state.value += action.payload;
        },
        // Reducer function for decreasing the value by a specific amount
        decreaseBy: (state, action) => {
            console.log("the number will decrease by : ",action.payload)
            state.value -= action.payload;
        },
    },
});

// Export the action creators
export const { increase, decrease, increaseBy, decreaseBy } = counter.actions;

// Export the reducer
export default counter.reducer;
