import { GET_FAV, ADD_FAV, REMOVE_FAV, GET_FAV_FICHA, ADD_FAV_FICHA, REMOVE_FAV_FICHA, RESET } from "../redux/actions";

const initialState = {
    myFavorites: [],
    characters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAV:
            return { ...state, myFavorites: state.myFavorites };
        case ADD_FAV:
            return { ...state, myFavorites: [...state.myFavorites, action.payload] };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (fav) => fav !== action.payload
                ),
            };
        case GET_FAV_FICHA:
            return { ...state, characters: state.characters };
        case ADD_FAV_FICHA:
            //return { ...state, characters: { ...state.characters, [action.payload.id]: action.payload } };
            return { ...state, characters: [...state.characters, action.payload] };
        case REMOVE_FAV_FICHA:
            // const newCharacters = { ...state.characters };
            // delete newCharacters[action.payload.id];
            // return { ...state, characters: newCharacters };
            return {
                ...state,
                characters: state.characters.filter(
                    (id) => id.id !== action.payload.id
                ),
            };
        case RESET:
            return { myFavorites: [], characters: [] };
        default:
            return { ...state };
    }
};

export default rootReducer;

//const { id, name, status, species, gender, origin, image, onClose } = this.props;