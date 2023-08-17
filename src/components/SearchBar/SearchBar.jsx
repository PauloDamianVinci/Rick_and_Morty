import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div className={style.container}>
         <div className={style.cuadroTexto}>
            <input type="search" placeholder="Id" className={style.input} />
            <button className={style.button} onClick={onSearch}>Agregar</button>
         </div>
      </div >
   );
}
