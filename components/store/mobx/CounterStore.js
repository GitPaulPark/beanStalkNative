// src/stores/CounterStore.js
import React from 'react';
import { makeAutoObservable } from 'mobx';

class CounterStore {
    constructor() {
        this.init();
        this.willInit=false;
        makeAutoObservable(this);
    }

    yesInit = () => {
        this.willInit=true;
    }

    increment = () => {
        console.log("increment from mobx");
        this.count += 1;
        console.log(this.count);
    }

    decrement = () => {
        this.count -= 1;
    }

    changeCounting = () => {
        this.counterStore.counting.push("a");
    }


    init = () => {
        this.count = 0;
        this.counterStore = {
            counting:[]
        }
        console.log(this.count,this.counterStore )
    }


}








// Instantiate the counter store.
// Create a React Context with the counter store instance.

export const CounterStoreContext = React.createContext(new CounterStore());
export const useCounterStore = () => React.useContext(CounterStoreContext)

