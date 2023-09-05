import { ADD_FAV, REMOVE_FAV, RESET, FILTER, ORDER } from "../redux/actions";

const initialState = {
    myFavorites: [],
}


//const rootReducer = (state = initialState, action) => {
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: [...state.myFavorites, payload] };
        case REMOVE_FAV:
            // const newCharacters = { ...state.characters };
            // delete newCharacters[action.payload.id];
            // return { ...state, characters: newCharacters };
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== Number(payload)
                ),
            };
        // case GET_FAV:
        //     return { ...state, myFavorites: state.myFavorites };
        case RESET:
            return { myFavorites: [] };
        case FILTER:
            return { ...state };
        case ORDER:
            return { ...state };
        default:
            return { ...state };
    }
};

export default rootReducer;

// switch (type) {
//     case ADD_FAV:
//         return { ...state, myFavorites: [...state.myFavorites, payload] };
//     case REMOVE_FAV:
//         // const newCharacters = { ...state.characters };
//         // delete newCharacters[action.payload.id];
//         // return { ...state, characters: newCharacters };
//         return {
//             ...state,
//             myFavorites: state.myFavorites.filter(
//                 (char) => char.id !== Number(payload)
//             ),
//         };
//     // case GET_FAV:
//     //     return { ...state, myFavorites: state.myFavorites };
//     case RESET:
//         return { myFavorites: [] };
//     case FILTER:
//         return { ...state };
//     case ORDER:
//         return { ...state };
//     default:
//         return { ...state };
// }