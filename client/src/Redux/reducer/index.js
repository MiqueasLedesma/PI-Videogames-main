import { GET_VIDEOGAMES } from '../actions/index'

const initialState = {
    videogames: [],
    videodetails: [],
    genres: [],
    platforms: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            if (action.payload) {
                return {
                    ...state,
                    videogames: action.payload
                }
            }
            break;
        default:
            return state;
    }
};

export default rootReducer;