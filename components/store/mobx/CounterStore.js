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
        this.willInit = true;
    }

    increment = () => {
        this.count += 1;
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
    }

}

export const CounterStoreContext = React.createContext(new CounterStore());

