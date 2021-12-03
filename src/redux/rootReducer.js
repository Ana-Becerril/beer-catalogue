import {combineReducers} from 'redux'
import beerReducers from './beer/beerReducers'

const rootReducer = combineReducers({
    beer: beerReducers
})

export default rootReducer