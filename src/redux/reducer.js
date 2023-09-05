import { ADD_FAV, REMOVE_FAV, RESET, FILTER, ORDER } from "../redux/actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            const updatedAllCharacters = [...state.allCharacters, payload];
            return { ...state, myFavorites: updatedAllCharacters, allCharacters: updatedAllCharacters };
        case REMOVE_FAV:
            const updatedMyFavorites = state.myFavorites.filter(
                (char) => char.id !== Number(payload)
            );
            const updatedAllChars = state.allCharacters.filter(
                (char) => char.id !== Number(payload)
            );
            return {
                ...state,
                myFavorites: updatedMyFavorites,
                allCharacters: updatedAllChars,
            };
        // case GET_FAV:
        //     return { ...state, myFavorites: state.myFavorites };
        case RESET:
            return { myFavorites: [], allCharacters: [], };
        case FILTER:
            if (payload === "Todos") {
                return { ...state, myFavorites: state.allCharacters };
            } else {
                const filteredCharacters = state.allCharacters.filter(
                    (char) => char.gender === payload
                );
                return { ...state, myFavorites: filteredCharacters };
            }
        case ORDER:
            const orderDirection = payload === "A" ? 1 : payload === "D" ? -1 : 0;
            const orderedFavorites = [...state.myFavorites].sort((a, b) => (a.id - b.id) * orderDirection);
            return { ...state, myFavorites: orderedFavorites };
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