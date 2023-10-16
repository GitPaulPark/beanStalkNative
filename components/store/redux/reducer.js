// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import counter from './firstReducer';

const rootReducer = combineReducers({
    counter,
    // Add more reducers as needed
});

export default rootReducer;
