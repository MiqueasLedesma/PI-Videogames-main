import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

export const getVideogames = () => async (dispatch) => {
    return await axios.get('http://localhost:3001/videogames')
        .then(r => dispatch({
            type: GET_VIDEOGAMES,
            payload: r.data
        }))
        .catch(e => console.log(e))
}