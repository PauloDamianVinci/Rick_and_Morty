import style from "./About.module.css";
import { PATHVAR } from "../../config/config";

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.containerImg}>
                <img className={style.img} src={PATHVAR.IMG_ABOUT} alt="" />
            </div>
            <p className={style.Description}>
                Hi, my name is Paulo Vinci. I'm a Full Stack student at Henry. This is my integrated project Rick and Morty.
            </p>
        </div>
    )
};

export default About;
