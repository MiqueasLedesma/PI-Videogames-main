import { GENRE_FILTER, GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_BY_ID, /* SHOW_SEARCH_RESULTS, */ SORT_LOW_MAX, SORT_MAX_LOW, SORT_MAX_LOW_A, SORT_MAX_LOW_B } from '../actions/index'

const initialState = {
    videogames: [],
    searchResults: [],
    videogameDetails: [],
    videogameFilter: [],
    genres: [],
    platforms: [],
    sortBy: ''
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
            console.log(action.payload)
            if (action.payload.length !== 0) {
                return {
                    ...state,
                    searchResults: action.payload
                }
            } else {
                alert('videogame not found!')
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
                    sortBy: action.payload,
                    videogames: state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        };
                        if (a.name < b.name) {
                            return -1;
                        };
                        return 0;
                    })
                }
            } break;
        case SORT_MAX_LOW:
            if (action.payload) {
                return {
                    ...state,
                    sortBy: action.payload,
                    videogames: state.videogames.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        };
                        if (a.name < b.name) {
                            return -1;
                        };
                        return 0;
                    }).reverse()
                }
            } break;
        case GET_GENRES:
            if (action.payload) {
                return {
                    ...state,
                    genres: action.payload
                };
            } break;
        case GENRE_FILTER:
            if (action.payload) {
                return {
                    ...state,
                    videogameFilter: state.videogames.filter(e => e.genres.includes(action.payload))
                };
            } break;
        case SORT_MAX_LOW_A:
            if (action.payload) {
                return {
                    ...state,
                    sortBy: action.payload,
                    videogames: state.videogames.sort((a, b) => a.rating - b.rating)
                }
            } break;
        case SORT_MAX_LOW_B:
            if (action.payload) {
                return {
                    ...state,
                    sortBy: action.payload,
                    videogames: state.videogames.sort((a, b) => b.rating - a.rating)
                }
            } break;
        default:
            return state;
    }
};

export default rootReducer;


