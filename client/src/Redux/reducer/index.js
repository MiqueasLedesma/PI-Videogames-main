import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_BY_ID, SHOW_SEARCH_RESULTS, SORT_LOW_MAX, SORT_MAX_LOW } from '../actions/index'

const initialState = {
    videogames: [],
    videogameSearch: [],
    videogameDetails: [],
    genres: [],
    platforms: [],
    searchResults: false,
    sortBy: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            if (action.payload) {
                return {
                    ...state,
                    videogames: action.payload
                }
            } break;
        case GET_VIDEOGAMES_BY_NAME:
            if (action.payload) {
                return {
                    ...state,
                    videogameSearch: action.payload
                }
            } break;
        case SHOW_SEARCH_RESULTS:
            if (action.payload) {
                return {
                    ...state,
                    searchResults: action.payload
                }
            } break;
        case GET_VIDEOGAME_BY_ID:
            if (action.payload) {
                return {
                    ...state,
                    videogameDetails: action.payload
                }
            } break;
        case SORT_LOW_MAX:
            if (action.payload) {
                return {
                    ...state,
                    sortBy: action.payload
                }
            } break;
        case SORT_MAX_LOW:
            if (action.payload) {
                return {
                    ...state,
                    sortBy: action.payload
                }
            } break;
        default:
            return state;
    }
};

export default rootReducer;


