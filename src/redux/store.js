import { createStore } from "redux";
import beerReducers from './beer/beerReducers'

const store = createStore(beerReducers)

export default store;