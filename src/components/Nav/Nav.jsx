import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { PATHROUTES } from "../../helpers/PathRoutes";
import { useState, useEffect } from "react";

let { container, contButton, Button, ButtonAct } = style;

const Nav = (props) => {

    const [optActive, setOptActive] = useState(1);

    const handleActive = (index) => {
        setOptActive(index);
        console.log("---PRESS ", index);
    };

    const { onSearch, logout } = props;
    return (
        <div className={container}>
            <Link to={PATHROUTES.HOME}>
                <p className={contButton} href="/">
                    <button className={`${optActive === 1 ? ButtonAct : Button}`} onClick={() => handleActive(1)}>Home</button>
                </p>
            </Link>
            <Link to={PATHROUTES.ABOUT}>
                <p className={contButton} href="/">
                    <button className={`${optActive === 2 ? ButtonAct : Button}`} onClick={() => handleActive(2)}>About</button>
                </p>

            </Link>
            <Link to={PATHROUTES.FAVORITES}>
                <p className={contButton} href="/">
                    <button className={`${optActive === 3 ? ButtonAct : Button}`} onClick={() => handleActive(3)}>Favoritos</button>
                </p>

            </Link>
            <p className={contButton} href="/">
                <button className={Button} onClick={() => { logout(); }}>Logout</button>
            </p>
            <SearchBar onSearch={onSearch} />
        </div >
    );
}
export default Nav


