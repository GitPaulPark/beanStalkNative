// src/stores/CounterStore.js
import React from 'react';
import { makeAutoObservable } from 'mobx';

class CounterStore2 {

    constructor() {

        this.count = 0;
        makeAutoObservable(this, {}, { autoBind: true });

    }

    increment = () => {

        console.log("increment from mobx");
        this.count += 1;
        console.log(this.count);

    }

    decrement= () => {

        this.count -= 1;

    }

}



// Instantiate the counter store.
// export default CounterStore2;
const counterStore = new CounterStore2();
// Create a React Context with the counter store instance.
export const CounterStoreContext = React.createContext(counterStore);
export const useCounterStore = () => React.useContext(CounterStoreContext)
