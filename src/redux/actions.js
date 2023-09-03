export const GET_FAV = "GET_FAV";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const RESET = "RESET";

export const getFav = () => {
    console.log('Action: GET_FAV');
    return { type: GET_FAV };
};

export const addFav = (props) => {
    console.log('Action: ADD_FAV');
    return { type: ADD_FAV, payload: props };
};

export const removeFav = (props) => {
    console.log('Action: REMOVE_FAV');
    return { type: REMOVE_FAV, payload: props };
};

export const reset = () => {
    console.log('Action: RESET');
    return { type: RESET };
};