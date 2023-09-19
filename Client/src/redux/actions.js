export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const RESET = "RESET";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
    ////console.log('Action: ADD_FAV');
    return { type: ADD_FAV, payload: character };
};

export const removeFav = (id) => {
    //log('Action: REMOVE_FAV');
    return { type: REMOVE_FAV, payload: id };
};

export const reset = () => {
    ////console.log('Action: RESET');
    return { type: RESET };
};

export const filterCards = (criteria) => {
    ////console.log('Action: filterCards');
    return { type: FILTER, payload: criteria };
};

export const orderCards = (criteria) => {
    ////console.log('Action: orderCards');
    return { type: ORDER, payload: criteria };
};

