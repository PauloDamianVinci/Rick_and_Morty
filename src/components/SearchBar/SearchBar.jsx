import style from "./SearchBar.module.css";
import { useState } from "react";
let { input, cuadroTexto, container, contButton, Button } = style;

const SearchBar = (props) => {
   const [id, setId] = useState("");
   const { onSearch, showSearch } = props;
   const randomId = Math.floor(Math.random() * 826) + 1;

   const handleChange = (event) => {
      setId(event.target.value);
   }

   console.log("showSearch ", showSearch);
   return (
      <div className={container}>
         {
            showSearch ? (
               <div className={cuadroTexto}>
                  <input type="search" placeholder="Id" className={input} name="srch" onChange={handleChange} value={id} />
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { onSearch(id); }}>Agregar</button>
                  </p>
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { onSearch(randomId); }}>Random</button>
                  </p>
               </div>
            ) : (
               <></>
            )
         }
      </div >
   );
}

export default SearchBar;
