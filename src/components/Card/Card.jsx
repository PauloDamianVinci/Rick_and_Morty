import style from "./Card.module.css";
let { container, containerButtonImg, buttonClose, img, nameC, containerFeatures, features } = style;

export default function Card(props) {
   const handleClick = () => {
      onClose(id);
   };

   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={container}>
         <div className={containerButtonImg}>
            <button className={buttonClose} onClick={handleClick}>X</button>
            <img className={img} src={image} alt="" />
            <h2 className={nameC}>{name}</h2>
         </div>
         <div className={containerFeatures}>
            <h2 className={features}>{species}</h2>
            <h2 className={features}>{gender}</h2>
         </div>
      </div>
   );
}


