import style from "./About.module.css";
import packageJson from '../../../package.json';
const IMG_ABOUT = import.meta.env.VITE_IMG_ABOUT || '/src/assets/About.jpg';
const VER_BACK = import.meta.env.VITE_RM_VER_BACK || '/versionback';
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE || 'http://localhost:3001/rickandmorty';
const RM_VER_BACK = API_URL_BASE + VER_BACK;
import axios from 'axios';
import { useState, useEffect } from "react";

const About = () => {
    const versionFront = packageJson.version;
    const [isLoading, setIsLoading] = useState(true);
    const [versionBack, setVersionBack] = useState('');

    useEffect(() => {
        axios(`${RM_VER_BACK}`)
            .then(({ data }) => {
                if (data.version) {
                    setVersionBack(data.version);
                } else {
                    window.alert("Error while obtaining backend version");
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
            .catch((error) => {
            });
    }, []);

    return (
        <div className={style.container}>
            {isLoading ? (
                <p>Loading...</p>
            ) : versionBack ? (
                <div className={style.container}>
                    <div className={style.containerImg}>
                        <img className={style.img} src={IMG_ABOUT} alt="" />
                    </div>
                    <p className={style.Description}>
                        Hi, my name is Paulo Vinci. I'm a Full Stack student at Henry. This is my integrated project Rick and Morty.
                    </p>
                    <p className={style.Ver}>
                        Version:
                    </p>
                    <p className={style.Ver}>
                        Frontend: {versionFront}
                    </p>
                    <p className={style.Ver}>
                        Backend: {versionBack}
                    </p>

                </div>
            ) : null}
        </div>
    )
};
export default About;
