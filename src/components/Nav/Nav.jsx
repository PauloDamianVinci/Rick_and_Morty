import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { PATHROUTES } from "../../helpers/PathRoutes";
import { useState } from "react";
import style from "./Nav.module.css";

let { container, contButton, Button, ButtonAct } = style;

const Nav = (props) => {
    const [optActive, setOptActive] = useState(1);
    const [showSearch, setShowSearch] = useState(true);
    const { onSearch, logout } = props;

    const handleActive = (index) => {
        setOptActive(index);
        if (index === 1) { setShowSearch(true) } else { setShowSearch(false) };
    };

    return (
        <div className={container}>
            <p className={contButton}>
                <Link to={PATHROUTES.HOME}>
                    <button className={`${optActive === 1 ? ButtonAct : Button}`} onClick={() => handleActive(1)}>Home</button>
                </Link>
            </p>
            <p className={contButton}>
                <Link to={PATHROUTES.ABOUT}>
                    <button className={`${optActive === 2 ? ButtonAct : Button}`} onClick={() => handleActive(2)}>About</button>
                </Link>
            </p>
            <p className={contButton}>
                <Link to={PATHROUTES.FAVORITES}>
                    <button className={`${optActive === 3 ? ButtonAct : Button}`} onClick={() => handleActive(3)}>Favoritos</button>
                </Link>
            </p>
            <p className={contButton}>
                <button className={Button} onClick={() => { logout(); }}>Logout</button>
            </p>
            <SearchBar onSearch={onSearch} showSearch={showSearch} />
        </div >
    );
}
export default Nav


