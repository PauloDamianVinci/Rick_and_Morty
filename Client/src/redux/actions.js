export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const RESET = "RESET";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from 'axios';
import { PATHROUTES } from "../config/config";

// export const addFav = (character) => {
//     return { type: ADD_FAV, payload: character };
// };
export const addFav = (character) => {
    const endpoint = PATHROUTES.RMFAV;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        } catch (error) {
            console.error("Error while adding to favorites:", error.message);
        }
    };
};

// export const addFav = (character) => {
//     const endpoint = PATHROUTES.RMFAV;
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: 'ADD_FAV',
//                 payload: data,
//             });
//         });
//     };
// };

// export const removeFav = (id) => {
//     return { type: REMOVE_FAV, payload: id };
// };
export const removeFav = (id) => {
    const endpoint = PATHROUTES.RMFAV + "/" + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        } catch (error) {
            console.error("Error while removing from favorites:", error.message);
        }
    };
};

export const reset = () => {
    //return { type: RESET };
    const endpoint = PATHROUTES.RMFAV + "/999";
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: 'RESET',
                payload: data,
            });
        });
    };
};

export const filterCards = (criteria) => {
    return { type: FILTER, payload: criteria };
};

export const orderCards = (criteria) => {
    return { type: ORDER, payload: criteria };
};

