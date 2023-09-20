import style from "./SearchBar.module.css";
import { useState } from "react";
let { input, cuadroTexto, container, contButton, Button } = style;
import randomGenerator from "../../functions/randomGenerator";

const SearchBar = (props) => {
   const [id, setId] = useState(0);
   const { onSearch, showSearch } = props;

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSearch = (random, mostrarMensajes) => {
      let idSearch = 0;
      if (random) {
         idSearch = randomGenerator(826);
      } else {
         idSearch = id;
      }
      onSearch(idSearch, mostrarMensajes);
   }

   return (
      <div className={container}>
         {
            showSearch ? (
               <div className={cuadroTexto}>
                  <input type="number" className={input} onChange={handleChange} value={id} id="quantity" min="0" />
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { handleSearch(false, true); }}>Add</button>
                  </p>
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { handleSearch(true, false); }}>Random</button>
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
