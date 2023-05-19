import "./OneItem.css"
import AddToCart from "../AddToCart/page";

interface OneItemProps{
  id?: string
  name?: string;
  price?: number;
  image?: string
  showAdd?: boolean
}

const OneItem: React.FC<OneItemProps> = ({id,name,price,image,showAdd}) => {

  return (
    <div>
      <div className="item-container">
        <img src={image} alt="image" width={206} height={309}/>
        <div className="details-container">
          <p className="detail-text">{name}</p>
          <p className="detail-text" style={{position: "absolute", transform: "translateX(165px)"}}>{price} TND</p>
        </div>
        {showAdd!==false && <AddToCart id={id}/>}
      </div>
    </div>
  );
};

export default OneItem;