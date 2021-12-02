import axios from "axios"
import { FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCES, SET_CATEGORY } from "./beerTypes"

export const fetchBeersRequest = () => {
    return {
        type: FETCH_BEERS_REQUEST
    }
}

export const setCategory = category =>{
    return{
        type: SET_CATEGORY,
        payload: category
    }
}

export const fetchBeersSucces = beers =>{
    return{
        type: FETCH_BEERS_SUCCES,
        payload: beers
    }
}

export const fetchBeersFailure = error =>{
    return{
        type: FETCH_BEERS_FAILURE,
        payload: error
    }
}

export const fetchBeers = () =>{
    return (dispatch) => {
        dispatch(fetchBeersRequest)
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            const beers = response.data
            dispatch(fetchBeersSucces(beers))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchBeersFailure(errorMsg))
        })
    }
}