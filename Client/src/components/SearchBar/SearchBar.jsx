import style from "./SearchBar.module.css";
import { useState } from "react";
let { input, cuadroTexto, container, contButton, Button } = style;
import randomGenerator from "../../functions/randomGenerator";

const SearchBar = (props) => {
   const [id, setId] = useState(0);
   const { onSearch, showSearch } = props;
   const randomId = randomGenerator(826);

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={container}>
         {
            showSearch ? (
               <div className={cuadroTexto}>
                  <input type="number" className={input} onChange={handleChange} value={id} id="quantity" min="0" />
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { onSearch(id, true); }}>Agregar</button>
                  </p>
                  <p className={contButton} href="/">
                     <button className={Button} onClick={() => { onSearch(randomId, false); }}>Random</button>
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
