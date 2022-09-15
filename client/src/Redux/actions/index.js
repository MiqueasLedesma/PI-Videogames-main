import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const SHOW_SEARCH_RESULTS = 'SHOW_SEARCH_RESULTS';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';
export const GET_GENRES = 'GET_GENRES';
export const SORT_LOW_MAX = 'SORT_LOW_MAX';
export const SORT_MAX_LOW = 'SORT_MAX_LOW';
export const SORT_MAX_LOW_A = 'SORT_MAX_LOW_A';
export const SORT_MAX_LOW_B = 'SORT_MAX_LOW_B';
export const GENRE_FILTER = 'GENRE_FILTER';


export const getVideogames = () => async (dispatch) => {
    return await axios.get('http://localhost:3001/videogames')
        .then(r => dispatch({
            type: GET_VIDEOGAMES,
            payload: r.data
        }))
        .catch(e => console.log(e));
};

export const getVideogamesByName = (name) => async (dispatch) => {
    console.log(name);
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

export const sortGamesLowMax = () => async (dispatch) => {
    return dispatch({
        type: SORT_LOW_MAX,
        payload: 'ABC'
    });
};

export const sortGamesMaxLow = () => async (dispatch) => {
    return dispatch({
        type: SORT_MAX_LOW,
        payload: 'CBA'
    });
};

export const SortGamesLowMaxA = () => async (dispatch) => {
    return dispatch({
        type: SORT_MAX_LOW_A,
        payload: '15'
    });
};

export const SortGamesLowMaxB = () => async (dispatch) => {
    return dispatch({
        type: SORT_MAX_LOW_B,
        payload: '51'
    });
};

export const getGenres = () => async (dispatch) => {
    return await axios.get(`http://localhost:3001/genres`)
        .then(r => dispatch({
            type: GET_GENRES,
            payload: r.data
        }))
        .catch(e => console.log(e));
};

export const genresFilter = (e) => async (dispatch) => {
    return dispatch({
        type: GENRE_FILTER,
        payload: e
    });
};

export const createGame = (input) => async () => {
    console.log(input);
    return await axios.post(`http://localhost:3001/videogames`, input)
        .then(r => alert('VIDEOGAME CREATED!'))
        .catch(e => console.log(e));
};