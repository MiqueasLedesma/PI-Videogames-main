import axios from "axios";

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

// export const getVideogames = async (dispatch) => {
//     await axios.get('http://localhost:3001/videogames')
//         .then(r => dispatch({
//             type: GET_VIDEOGAMES,
//             payload: r.data
//         }))
//         .catch(e => console.log(e))
// };


// import { GET_VIDEOGAMES } from '.';
// import axios from 'axios'

export default function getVideogames() {
    return async function (dispatch){
        var result = await axios.get('http://localhost:3001/videogames'); 
        console.log(result)
        return dispatch({ 
            type: GET_VIDEOGAMES, 
            payload: result.data
        })                                                                                                 
    }
}