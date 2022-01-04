import axios from "axios"
import { FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCES, FILTER_BEERS } from "./beerTypes"

export const fetchBeers = () => {
    return (dispatch) => {
        dispatch(fetchBeersRequest())
        axios
        .get('https://api.punkapi.com/v2/beers?page=3&per_page=80')
        .then(response => {
            const beers = response.data
            dispatch(fetchBeersSucces(beers))
        })
        .catch(error =>{
            dispatch(fetchBeersFailure(error.message))
        })
    }
}

export const fetchBeersRequest = () => {
    return {
        type: FETCH_BEERS_REQUEST
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
// hjgfhjfhj 'percromato.33
}

export const filterBeers = category =>{
    return{
        type: FILTER_BEERS,
        payload: category,
    }
}

//This is a comment

