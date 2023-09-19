import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PATHROUTES, PATHVAR } from "../../config/config";
import style from "./Detail.module.css";

let { container, containerImg, img, containerDetails, features, featuresTitle, imgCargando, containerImgCargando } = style;

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const charError = {
        name: 'Detalles no encontrados',
        status: 'not found',
        gender: 'not found',
        species: 'not found',
        origin: { name: 'not found', },
        image: 'not found'
    };

    useEffect(() => {
        console.log("useEffect")
        axios(`${PATHROUTES.RMCHARS}/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    setCharacter(charError);
                    window.alert('No se encontraron detalles para el personaje');
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                charError.name = error.message; //usar error.response.status para sólo el nro.
                charError.image = PATHVAR.IMG_ERR_DETAIL;
                setCharacter(charError);
            });
    }, [id]);

    return (
        <div className={container}>
            {isLoading ? (
                <div className={containerImgCargando}>
                    <img className={imgCargando} src={PATHVAR.IMG_ESPERA} alt="" />
                </div>
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

export default Detail;
