import {combineReducers} from 'redux'
import beerReducers from './beer/beerReducers'

const rootReducer = combineReducers({
    beers: beerReducers
})

export default rootReducer