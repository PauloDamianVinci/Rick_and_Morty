import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

let { container, button } = style;

const Nav = (props) => {
    const { onSearch } = props;
    return (
        <div className={container}>
            <Link to="/home">
                <button className={button} >Home</button>
            </Link>
            <Link to="/about">
                <button className={button} >About</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}
export default Nav


