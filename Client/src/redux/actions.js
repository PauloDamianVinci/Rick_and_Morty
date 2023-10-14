export const SET_ID_USER = "SET_ID_USER";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const RESET = "RESET";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from 'axios';
import { PATHROUTES } from "../config/config";

export const addFav = (character) => {
    const endpoint = PATHROUTES.RMFAV;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.error("Error while adding to favorites:", error.message);
        }
    };
};

export const removeFav = (dataFav) => {
    const endpoint = PATHROUTES.RMFAV + "/" + dataFav.id;
    const myBody = { userId: dataFav.userId.toString() };
    return async (dispatch) => {
        try {
            const { data } = await axios.put(endpoint, myBody);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.error("Error while removing from favorites:", error.message);
        }
    };
};

export const reset = () => {
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

export const saveIdUser = (id) => {
    return { type: SET_ID_USER, payload: id };
};
