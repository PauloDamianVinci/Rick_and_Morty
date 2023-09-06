import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { PATHROUTES } from "../../helpers/PathRoutes";

let { container, bn31, bn31span } = style;

const Nav = (props) => {
    const { onSearch, logout } = props;
    return (
        <div className={container}>
            <Link to={PATHROUTES.HOME}>
                {/* <button className={button} >Home</button> */}
                <p className={bn31} href="/">
                    <button className={bn31span}>Home</button>
                </p>
            </Link>
            <Link to={PATHROUTES.ABOUT}>
                {/* <button className={button} >About</button> */}
                <p className={bn31} href="/">
                    <button className={bn31span}>About</button>
                </p>

            </Link>
            <Link to={PATHROUTES.FAVORITES}>
                {/* <button className={button} >Favoritos</button> */}
                <p className={bn31} href="/">
                    <button className={bn31span}>Favoritos</button>
                </p>

            </Link>
            {/* <button className={button} onClick={() => { logout(); }}>Logout</button> */}
            <p className={bn31} href="/">
                <button className={bn31span} onClick={() => { logout(); }}>Logout</button>
            </p>
            <SearchBar onSearch={onSearch} />
        </div >
    );
}
export default Nav


