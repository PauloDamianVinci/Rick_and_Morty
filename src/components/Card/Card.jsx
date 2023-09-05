import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
// Estilos:
import style from "./Card.module.css";
let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

const Card = (props) => {
   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;

   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   const handleClick = () => {
      onClose(id);
   };

   useEffect(() => {
      //console.log(pathname);
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   //tecla Windows + "."" para desplegar la lista de iconos.
   return (
      <div className={container}>
         <div className={containerButtonImg}>
            {
               isFav ? (
                  <button className={buttonFav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={buttonFav} onClick={handleFavorite}>🤍</button>
               )
            }
            {
               pathname !== "/favorites" && (
                  <button className={buttonClose} onClick={handleClick}>X</button>
               )
            }
            <img className={img} src={image} alt="" />
            <Link to={`/detail/${id}`} >
               <h2 className={nameC}>{name}</h2>
            </Link>
         </div>
         <div className={containerFeatures}>
            <h2 className={features}>{species}</h2>
            <h2 className={features}>{gender}</h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);
