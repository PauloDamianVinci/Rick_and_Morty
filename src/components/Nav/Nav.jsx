import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

let { container, button } = style;

const Nav = (props) => {
    const { onSearch, logout } = props;
    return (
        <div className={container}>
            <Link to="/home">
                <button className={button} >Home</button>
            </Link>
            <Link to="/about">
                <button className={button} >About</button>
            </Link>
            <Link to="/favorites">
                <button className={button} >Favoritos</button>
            </Link>
            <button className={button} onClick={() => { logout(); }}>Logout</button>
            <SearchBar onSearch={onSearch} />
        </div >
    );
}
export default Nav


