import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const SHOW_SEARCH_RESULTS = 'SHOW_SEARCH_RESULTS';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const SORT_LOW_MAX = 'SORT_LOW_MAX';
export const SORT_MAX_LOW = 'SORT_MAX_LOW';

export const getVideogames = () => async (dispatch) => {
    return await axios.get('http://localhost:3001/videogames')
        .then(r => dispatch({
            type: GET_VIDEOGAMES,
            payload: r.data
        }))
        .catch(e => console.log(e));
};

export const getVideogamesByName = (name) => async (dispatch) => {
    return await axios.get(`http://localhost:3001/videogames?name=${name}`)
        .then(r => dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: r.data
        }))
        .catch(e => console.log(e));
};

export const getVideogameByID = (id) => async (dispatch) => {
    return await axios.get(`http://localhost:3001/videogame/${id}`)
        .then(r => dispatch({
            type: GET_VIDEOGAME_BY_ID,
            payload: r.data
        }))
        .catch(e => console.log(e));
};

export const showSearchResults = () => async (dispatch) => {
    return dispatch({
        type: SHOW_SEARCH_RESULTS,
        payload: true
    });
};

export const sortGamesLowMax = () => async (dispatch) => {
    return dispatch({
        type: SORT_LOW_MAX,
        payload: 'ASCENDENT'
    });
};

export const sortGamesMaxLow = () => async (dispatch) => {
    return dispatch({
        type: SORT_MAX_LOW,
        payload: 'DESENDENT'
    });
};

