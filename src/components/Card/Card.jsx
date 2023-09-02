//! Este componente lo redefino como de clase para seguir el ejercicio:
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav, addFavFicha, removeFavFicha } from "../../redux/actions";
// Estilos:
import style from "./Card.module.css";
let { buttonFav, container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

class Card extends React.Component {
   constructor(props) {
      super(props);
      const { id, name, status, species, gender, origin, image, onClose, originHome } = this.props;
      this.state = {
         id,
         name,
         status,
         species,
         gender,
         origin,
         image,
         onClose,
         originHome,
         isFav: false
      };
   }

   handleFavorite = () => {
      const propsCard = this.props;
      if (this.state.isFav) {
         this.setState({ isFav: false });
         this.props.removeFav(this.props.id); // sólo id
         this.props.removeFavFicha(propsCard); // datos completos de la card
      } else {
         this.setState({ isFav: true });
         this.props.addFav(this.props.id); // sólo id
         this.props.addFavFicha(propsCard); // datos completos de la card
      }
   };

   handleClick = () => {
      this.props.onClose(this.props.id);
   };

   componentDidMount() {
      this.props.myFavorites.forEach((fav) => {
         if (fav === this.props.id) {
            this.setState({ isFav: true });
         }
      });
   }

   render() {
      const { id, name, status, species, gender, origin, image, onClose, isFav, originHome } = this.state;
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
               {
                  originHome ? (
                     <button className={buttonClose} onClick={this.handleClick}>X</button>
                  ) : (
                     <></>
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
      },
      addFavFicha: (props) => {
         dispatch(addFavFicha(props));
      },
      removeFavFicha: (props) => {
         dispatch(removeFavFicha(props));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
