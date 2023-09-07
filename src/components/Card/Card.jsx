import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav, filterCards } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
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

   return (
      <div className={container}>
         <div className={containerButtonImg}>
            {
               isFav ? (
                  <button className={buttonFav} onClick={handleFavorite}>💖</button>
               ) : (
                  <button className={buttonFav} onClick={handleFavorite}>🤍</button>
               )
            }
            {pathname !== "/favorites" && (
               <button className={buttonClose} onClick={handleClick}>X</button>
            )}
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

};
export default Card;

// //! Este componente lo redefino como de clase para seguir el ejercicio:
// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { addFav, removeFav } from "../../redux/actions";
// // Estilos:
// import style from "./Card.module.css";
// let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

// class Card extends React.Component {
//    constructor(props) {
//       super(props);
//       const { id, name, status, species, gender, origin, image, onClose, originHome } = this.props;
//       this.state = {
//          id,
//          name,
//          status,
//          species,
//          gender,
//          origin,
//          image,
//          onClose,
//          originHome,
//          isFav: false
//       };
//    }

//    handleFavorite = () => {
//       const propsCard = this.props;
//       if (this.state.isFav) {
//          this.setState({ isFav: false });
//          this.props.removeFav(propsCard.id); // datos completos de la card
//       } else {
//          this.setState({ isFav: true });
//          this.props.addFav(propsCard); // datos completos de la card
//       }
//    };

//    handleClick = () => {
//       this.props.onClose(this.props.id);
//    };

//    componentDidMount() {
//       this.props.myFavorites.forEach((fav) => {
//          if (fav.id === parseInt(this.props.id)) {
//             this.setState({ isFav: true });
//             console.log('found');
//          }
//       });
//    }
//    //tecla Windows + "."" para desplegar la lista de iconos.
//    render() {
//       const { id, name, status, species, gender, origin, image, onClose, isFav, originHome } = this.state;
//       return (
//          <div className={container}>
//             <div className={containerButtonImg}>
//                {
//                   isFav ? (
//                      <button className={buttonFav} onClick={this.handleFavorite}>❤️</button>
//                   ) : (
//                      <button className={buttonFav} onClick={this.handleFavorite}>🤍</button>
//                   )
//                }
//                {
//                   originHome ? (
//                      <button className={buttonClose} onClick={this.handleClick}>X</button>
//                   ) : (
//                      <></>
//                   )
//                }
//                <img className={img} src={image} alt="" />
//                <Link to={`/detail/${id}`} >
//                   <h2 className={nameC}>{name}</h2>
//                </Link>
//             </div>
//             <div className={containerFeatures}>
//                <h2 className={features}>{species}</h2>
//                <h2 className={features}>{gender}</h2>
//             </div>
//          </div>
//       );
//    }
// }

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites,
//    }
// }

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (props) => {
//          dispatch(addFav(props));
//       },
//       removeFav: (props) => {
//          dispatch(removeFav(props));
//       },
//    };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
