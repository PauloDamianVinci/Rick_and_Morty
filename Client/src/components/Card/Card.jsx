import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav, filterCards } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PATHROUTES, PATHVAR } from "../../config/config";
import style from "./Card.module.css";
let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features, containerImgCargando, imgCargando, idC, featuresCard } = style;

const Card = (props) => {
   const { id, name, species, gender, image, onClose } = props;
   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   const myUserId = useSelector((state) => state.IdUser);
   const [isLoading, setIsLoading] = useState(true);

   const handleFavorite = () => {
      //isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
      if (isFav) {
         //dispatch(removeFav(id));
         //console.log("Remove fav id ", id)

         const newFav = { userId: myUserId, id: id };
         dispatch(removeFav(newFav));
      } else {
         //console.log(props);
         //console.log("Add fav id ", props)
         const newFav = { userId: myUserId, ...props };
         //console.log(newFav);
         dispatch(addFav(newFav));
      }
      setIsFav(!isFav);
   };

   useEffect(() => {
      setIsLoading(true);
      // myFavorites.forEach((fav) => {
      //    if (fav.id === props.id) {
      //       setIsFav(true);
      //    }
      // });
      myFavorites.forEach((fav) => {
         if (fav.idChar === props.id) {
            setIsFav(true);
         }
      });


      //console.log("myuserId ", myuserId)

      setIsLoading(false);
   }, [myFavorites]);

   const handleClick = () => {
      onClose(id);
   };
   //tecla Windows + "."" para desplegar la lista de iconos.
   return (
      <div className={container}>
         {isLoading ? (
            <div className={containerImgCargando}>
               <img className={imgCargando} src={PATHVAR.IMG_ESPERA} alt="" />
            </div>
         ) : id ? (
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
                  <h2 className={idC}>{id}</h2>
                  <img className={img} src={image} alt="" />
                  <Link to={`${PATHROUTES.DETAILBASE}/${id}`} >
                     <h2 className={nameC}>{name}</h2>
                  </Link>
                  <div className={containerFeatures}>
                     <h2 className={featuresCard}>{species}</h2>
                     <h2 className={featuresCard}>{gender}</h2>
                  </div>
               </div>
            </div>
         ) : null}
      </div>
   );

};
export default Card;
