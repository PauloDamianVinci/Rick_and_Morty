import { GET_FAV, ADD_FAV, REMOVE_FAV, RESET } from "../redux/actions";

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAV:
            return { ...state, myFavorites: state.myFavorites };
        case ADD_FAV:
            //return { ...state, characters: { ...state.characters, [action.payload.id]: action.payload } };
            return { ...state, myFavorites: [...state.myFavorites, action.payload] };
        case REMOVE_FAV:
            // const newCharacters = { ...state.characters };
            // delete newCharacters[action.payload.id];
            // return { ...state, characters: newCharacters };
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (id) => id.id !== action.payload.id
                ),
            };
        case RESET:
            return { myFavorites: [] };
        default:
            return { ...state };
    }
};

export default rootReducer;
