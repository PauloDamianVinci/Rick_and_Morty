import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFav } from "../../redux/actions.js";
import style from "./Favorites.module.css";

const Favorites = (props) => {
    const { characters, onClose, onSearch } = props;
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites);

    useEffect(() => {
        mapStateToProps();
        //console.log(myFavorites);
        console.log(obtenerInfoFavoritos());
        //console.log(characters);
    }, []);

    const mapStateToProps = () => {
        return dispatch(getFav());
    }

    const obtenerInfoFavoritos = () => {
        const listado = myFavorites.map(id => {
            //console.log('id: ', id);
            const resultadoBusqueda = onSearch(id);
            return {
                resultadoBusqueda
            };
        });
        //console.log('listado: ', listado);
        return listado;
    }

    return (
        <div className={style.container}>
            {characters.map((char) => {
                return (
                    <Card
                        id={char.id}
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
}

export default Favorites;

// {myFavorites.map((char) => {
//     return (
//         <Card
//             id={char.id}
//             key={char.id}
//             name={char.name}
//             status={char.status}
//             species={char.species}
//             gender={char.gender}
//             origin={char.origin.name}
//             image={char.image}
//             onClose={onClose}
//         />
//     );
//})}