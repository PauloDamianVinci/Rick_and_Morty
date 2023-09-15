import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.container}>
            <p className={style.element}>
                Información de esta página de Rick and Morty - by Paulo Vinci.
            </p>
        </div>
    )
};

export default About;
