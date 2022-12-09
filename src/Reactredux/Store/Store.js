import { createStore } from "redux";
import CounterRedux from "../CounterRedux/CounterRedux";


const store = createStore(CounterRedux);

export default store;