export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const RESET = "RESET";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id };
};

export const reset = () => {
    return { type: RESET };
};

export const filterCards = (criteria) => {
    return { type: FILTER, payload: criteria };
};

export const orderCards = (criteria) => {
    return { type: ORDER, payload: criteria };
};

