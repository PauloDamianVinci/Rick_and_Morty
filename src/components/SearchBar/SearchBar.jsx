import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
   const [id, setId] = useState("");
   const { onSearch } = props;

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const randomId = Math.floor(Math.random() * 826) + 1;
   return (
      <div className={style.container}>
         <div className={style.cuadroTexto}>
            <input type="search" placeholder="Id" className={style.input} name="srch" onChange={handleChange} value={id} />
            <button className={style.button} onClick={() => { onSearch(id); }}>Agregar</button>
            <button className={style.button} onClick={() => { onSearch(randomId); }}>Random</button>
         </div>
      </div >
   );
}
export default SearchBar;
