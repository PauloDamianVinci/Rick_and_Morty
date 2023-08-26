import style from "./Form.module.css";
import { useState } from "react";
import Validation from "../../functions/validation";

let { container, emailDiv, passDiv, button, datosDiv, img, containerImg, errValid, okValid, errores } = style;

const Form = (props) => {
    const { login } = props;

    const [userData, setUserData] = useState({
        mail: "erraticless@gmail.com",
        password: "123456",
    });

    const [errors, setErrors] = useState({
        mail: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value });
        Validation({ ...userData, [property]: value }, setErrors, errors, property);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form className={container} onSubmit={handleSubmit}>
            <div className={datosDiv}>
                <div className={containerImg}>
                    <img className={img} src={"/src/assets/RMLogin.jpg"} alt="" />
                </div>
                <div className={emailDiv}>
                    <label htmlFor="mail">Email:</label>
                    <input
                        type="text"
                        name="mail"
                        id="mail"
                        value={userData.mail}
                        onChange={handleChange}
                        className={errors.mail ? errValid : okValid}
                    />
                    <span className={errores}>{errors.mail}</span>
                </div>
                <div className={passDiv}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        className={errors.password ? errValid : okValid}
                    />
                    <span className={errores}>{errors.password}</span>
                </div>
                <button className={button} type="submit">Submit</button>
            </div>
        </form>
    )

}
export default Form;
