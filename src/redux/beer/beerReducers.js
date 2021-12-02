import { FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCES, SET_CATEGORY } from "./beerTypes"

const initialState = {
    category: "",
    loading: false,
    beers: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_CATEGORY:
            return {
                loading: false,
                category: action.payload,
            }
        case FETCH_BEERS_SUCCES:
            return {
                loading: false,
                beers: action.payload,
                error: ''
            }
        case FETCH_BEERS_FAILURE:
            return {
                loading: false,
                beers: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer