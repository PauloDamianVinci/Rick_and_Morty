import { GET_FAV, ADD_FAV, REMOVE_FAV } from "../redux/actions";

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAV:
            return { ...state, myFavorites: state.myFavorites };
        case ADD_FAV:
            return { ...state, myFavorites: [...state.myFavorites, action.payload] };
        case REMOVE_FAV:
            console.log('Reduce: REMOVE_FAV ', action.payload);
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (fav) => fav !== action.payload
                ),
            };
        default:
            console.log('Reduce: nadinas');
            return { ...state };
    }
};

export default rootReducer;
