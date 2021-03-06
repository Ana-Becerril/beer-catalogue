import { FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCES, FILTER_BEERS } from "./beerTypes"

const initialState = {
    loading: false,
    beers: [],
    error: "",
    filteredData: [],
    category: "All"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BEERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BEERS_SUCCES:
            return {
                loading: false,
                beers: action.payload,
                filteredData: action.payload,
                error: ''
            }
        case FETCH_BEERS_FAILURE:
            return {
                loading: false,
                beers: [],
                error: action.payload
            }
        case FILTER_BEERS:
            if (action.payload === "All") {
                return{...state,
                filteredData: state.beers}
            }
            return {
                ...state,
                filteredData: state.beers.filter((beer) => beer.tagline.includes(action.payload) || beer.name.includes(action.payload) || beer.description.includes(action.payload))
            };
        default:
            return state
    }
}

export default reducer