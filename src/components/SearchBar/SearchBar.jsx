import style from "./SearchBar.module.css";
import { useState } from "react";
let { input, cuadroTexto, container, bn31, bn31span } = style;

const SearchBar = (props) => {
   const [id, setId] = useState("");
   const { onSearch } = props;

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const randomId = Math.floor(Math.random() * 826) + 1;
   return (
      <div className={container}>
         <div className={cuadroTexto}>
            <input type="search" placeholder="Id" className={input} name="srch" onChange={handleChange} value={id} />
            <p className={bn31} href="/">
               <button className={bn31span} onClick={() => { onSearch(id); }}>Agregar</button>
            </p>
            <p className={bn31} href="/">
               <button className={bn31span} onClick={() => { onSearch(randomId); }}>Random</button>
            </p>
         </div>
      </div >
   );
}
export default SearchBar;
