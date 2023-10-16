// src/stores/CounterStore.js
import React from 'react';
import { makeAutoObservable } from 'mobx';

class UserStore {
    constructor() {
        this.init();
        this.willInit=false;
        makeAutoObservable(this);
    }

    yesInit = () => {
        this.willInit = true;
    }

    increment = () => {
        this.addAge();
    }

    decrement = () => {
        this.minusAge();
    }

    addAge = () => {
        this.user.age++;
    }

    minusAge = () => {
        this.user.age--;
    }


    init = () => {
        this.user = {
            name:"paul",
            age:29,
            height:175
        }

    }

}

export const UserStoreContext = React.createContext(new UserStore());

