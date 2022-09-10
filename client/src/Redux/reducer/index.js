import { GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, SHOW_SEARCH_RESULTS } from '../actions/index'

const initialState = {
    videogames: [],
    videogameSearch: [],
    videodetails: [],
    genres: [],
    platforms: [],
    searchResults: false
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
        default:
            return state;
    }
};

export default rootReducer;