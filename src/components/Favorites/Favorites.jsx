import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavFicha } from "../../redux/actions.js";

import Card from "../Card/Card.jsx";
import style from "./Favorites.module.css";

const Favorites = (props) => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        mapStateToProps();
        console.log("characters: ", characters);
        setIsLoading(false);
    }, []);

    const mapStateToProps = () => {
        dispatch(getFavFicha());
    }

    return (
        <div className={style.container}>
            {isLoading ? (
                <p>Cargando...</p>
            ) : characters ? (
                characters.map((character) => (
                    <Card
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin?.name}
                        image={character.image}
                        originHome={false}
                    />
                ))
            ) : null}
        </div>
    );
};

export default Favorites;
