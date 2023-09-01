//! Este componente lo redefino como de clase para seguir el ejercicio:
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
// Estilos:
import style from "./Card.module.css";
let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

class Card extends React.Component {
   constructor(props) {
      super(props);
      const { id, name, status, species, gender, origin, image, onClose } = this.props;
      this.state = {
         id,
         name,
         status,
         species,
         gender,
         origin,
         image,
         onClose,
         isFav: false
      };

   }

   handleFavorite = () => {
      if (this.state.isFav) {
         this.setState({ isFav: false });
         this.props.removeFav(this.props.id);
      } else {
         this.setState({ isFav: true });
         this.props.addFav(this.props.id);
      }
   };

   handleClick = () => {
      this.props.onClose(this.props.id);
   };

   componentDidMount() {
      console.log(this.props.myFavorites);
      this.props.myFavorites.forEach((fav) => {
         if (fav === this.props.id) {
            this.setState({ isFav: true });
         }
      });

   }
   render() {
      // Puedes acceder a las props deestructuradas desde el estado
      const { id, name, status, species, gender, origin, image, onClose, isFav } = this.state;
      return (
         <div className={container}>
            <div className={containerButtonImg}>
               {
                  isFav ? (
                     <button className={buttonFav} onClick={this.handleFavorite}>❤️</button>
                  ) : (
                     <button className={buttonFav} onClick={this.handleFavorite}>🤍</button>
                  )
               }
               <button className={buttonClose} onClick={this.handleClick}>X</button>
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
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => {
         dispatch(addFav(id));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//! Componente funcional sin implementar redux:
// import style from "./Card.module.css";
// let { container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;
// import { Link } from "react-router-dom";

// const Card = (props) => {
//    const { id, name, status, species, gender, origin, image, onClose } = props;

//    const handleClick = () => {
//       onClose(id);
//    };


//    return (
//       <div className={container}>
//          <div className={containerButtonImg}>
//             <button className={buttonClose} onClick={handleClick}>X</button>
//             <img className={img} src={image} alt="" />
//             <Link to={`/detail/${id}`} >
//                <h2 className={nameC}>{name}</h2>
//             </Link>
//          </div>
//          <div className={containerFeatures}>
//             <h2 className={features}>{species}</h2>
//             <h2 className={features}>{gender}</h2>

//          </div>
//       </div>
//    );
// }
// export default Card

