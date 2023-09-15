import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav, filterCards } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { PATHROUTES } from "../../helpers/PathRoutes";
let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

const Card = (props) => {
   const { id, name, species, gender, image, onClose } = props;
   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
      setIsFav(!isFav);
   };

   useEffect(() => {
      console.log("-- I myFavorites CARD: ", myFavorites);
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      console.log("-- F myFavorites CARD: ", myFavorites);

      // Intenté refrescar el filtro a "Todos" antes de descargar el componente pero no me anduvo:
      // return () => {
      //    dispatch(filterCards("Todos"));
      //    console.log("LIMPIO FILTRO CARD");
      // };
   }, [myFavorites]);

   const handleClick = () => {
      onClose(id);
   };
   //tecla Windows + "."" para desplegar la lista de iconos.
   return (
      <div className={container}>
         <div className={containerButtonImg}>
            {
               isFav ? (
                  <button className={buttonFav} onClick={handleFavorite}>💚</button>
               ) : (
                  <button className={buttonFav} onClick={handleFavorite}>🤍</button>
               )
            }
            {pathname !== PATHROUTES.FAVORITES && (
               <button className={buttonClose} onClick={handleClick}>X</button>
            )}
            <img className={img} src={image} alt="" />
            <Link to={`${PATHROUTES.DETAILBASE}/${id}`} >
               <h2 className={nameC}>{name}</h2>
            </Link>
         </div>
         <div className={containerFeatures}>
            <h2 className={features}>{species}</h2>
            <h2 className={features}>{gender}</h2>
         </div>
      </div>
   );

};
export default Card;
