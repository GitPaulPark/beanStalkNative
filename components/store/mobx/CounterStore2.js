// src/stores/CounterStore.js
import React from 'react';
import { makeAutoObservable } from 'mobx';

class CounterStore2 {

    constructor() {

        this.count = 0;
        makeAutoObservable(this);

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


const repositoryProps = {
    serverContextPath: "",
};

export const CounterStoreContext2 = React.createContext(new CounterStore2(repositoryProps));
