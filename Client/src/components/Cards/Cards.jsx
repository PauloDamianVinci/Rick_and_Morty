import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
import { filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Cards = (props) => {
   const { characters, onClose } = props;
   const dispatch = useDispatch();

   //console.log("-----I----- characters CARDS: ", characters);
   dispatch(filterCards("Todos")); // limpio filtro para que muestre todas las cards en home. Quise hacerlo en el useEffect pero no anduvo
   //console.log("----F------ characters CARDS: ", characters);


   return (
      <div className={style.container}>
         {characters.map((char) => {
            return (
               <Card
                  id={char.id}
                  key={char.id}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin.name}
                  image={char.image}
                  onClose={onClose}
               />
            );
         })}
      </div>
   );
}

export default Cards
