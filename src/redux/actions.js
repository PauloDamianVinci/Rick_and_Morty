export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_FAV = "GET_FAV";
export const RESET = "RESET";

export const addFav = (character) => {
    console.log('Action: ADD_FAV');
    return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
    console.log('Action: REMOVE_FAV');
    return { type: REMOVE_FAV, payload: id };
};

export const getFav = () => {
    console.log('Action: GET_FAV');
    return { type: GET_FAV };
};

export const reset = () => {
    console.log('Action: RESET');
    return { type: RESET };
};