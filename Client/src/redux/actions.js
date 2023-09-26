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
    //const endpoint = 'http://localhost:3001/rickandmorty/fav';
    const endpoint = PATHROUTES.RMFAV;
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        });
    };
};

// export const removeFav = (id) => {
//     return { type: REMOVE_FAV, payload: id };
// };
export const removeFav = (id) => {
    //const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    const endpoint = PATHROUTES.RMFAV + "/" + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        });
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

