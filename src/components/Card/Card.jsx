import style from "./Card.module.css";
let { container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;
import { Link } from "react-router-dom";

const Card = (props) => {
   const handleClick = () => {
      onClose(id);
   };

   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={container}>
         <div className={containerButtonImg}>
            <button className={buttonClose} onClick={handleClick}>X</button>
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

export default Card

