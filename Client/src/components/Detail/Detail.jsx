import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import { PATHROUTES } from "../../helpers/PathRoutes";

let { container, containerImg, img, containerDetails, features, featuresTitle } = style;

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        axios(`${PATHROUTES.RMCHARS}/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        setIsLoading(false);
        return setCharacter({});

    }, [id]);

    return (
        <div className={container}>
            {isLoading ? (
                <p>Cargando...</p>
            ) : character ? (
                <div className={container}>
                    <div className={containerDetails}>
                        <h2 className={featuresTitle}>{character.name}</h2>
                        <h2 className={features}>STATUS | {character?.status}</h2>
                        <h2 className={features}>GENDER | {character?.gender}</h2>
                        <h2 className={features}>SPECIE | {character?.species}</h2>
                        <h2 className={features}>ORIGIN | {character.origin?.name}</h2>
                    </div>
                    <div className={containerImg}>
                        <img className={img} src={character.image} alt="" />
                    </div>
                </div>

            ) : null}
        </div>
    );
}

export default Detail
