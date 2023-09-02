export const GET_FAV = "GET_FAV";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_FAV_FICHA = "GET_FAV_FICHA";
export const ADD_FAV_FICHA = "ADD_FAV_FICHA";
export const REMOVE_FAV_FICHA = "REMOVE_FAV_FICHA";
export const RESET = "RESET";

export const getFav = (id) => {
    console.log('Action: GET_FAV');
    return { type: GET_FAV };
};

export const addFav = (id) => {
    console.log('Action: ADD_FAV');
    return { type: ADD_FAV, payload: id };
};

export const removeFav = (id) => {
    console.log('Action: REMOVE_FAV');
    return { type: REMOVE_FAV, payload: id };
};

export const getFavFicha = () => {
    console.log('Action: GET_FAV_FICHA');
    return { type: GET_FAV_FICHA };
};

export const addFavFicha = (props) => {
    console.log('Action: ADD_FAV');
    return { type: ADD_FAV_FICHA, payload: props };
};

export const removeFavFicha = (props) => {
    console.log('Action: REMOVE_FAV');
    return { type: REMOVE_FAV_FICHA, payload: props };
};

export const reset = () => {
    console.log('Action: RESET');
    return { type: RESET };
};