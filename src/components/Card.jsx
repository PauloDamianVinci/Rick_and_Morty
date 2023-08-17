import style from "../styles/Card.module.css";

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;

   return (
      <div className={style.container}>
         <div className={style.containerButtonImg}>
            <button className={style.buttonClose} onClick={onClose}>X</button>
            <img className={style.img} src={image} alt="" />
            <h2 className={style.name}>{name}</h2>
         </div>
         <div className={style.containerFeatures}>
            <h2 className={style.features}>{species}</h2>
            <h2 className={style.features}>{gender}</h2>
         </div>
      </div>
   );
}


