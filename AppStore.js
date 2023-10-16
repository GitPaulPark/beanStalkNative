import {CounterStoreContext2} from "./components/store/mobx/CounterStore2";
import React from "react";
import {CounterStoreContext} from "./components/store/mobx/CounterStore";
import {UserStoreContext} from "./components/store/mobx/userStore";



export const useCounterStore = () => React.useContext(CounterStoreContext);
export const useCounterStore2 = () => React.useContext(CounterStoreContext2);
export const useUserStoreContext = () => React.useContext(UserStoreContext);






export const stores = {
    counterStore: useCounterStore(),
    counterStore2: useCounterStore2(),
    UserStore: useUserStoreContext()
}
