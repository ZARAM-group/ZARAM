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
        <img src={image} alt="image" width={300} height={500}/>
        <div className="details-container">
          <p className="detail-text">{name}</p>
          <p className="detail-text">{price} TND</p>
          {showAdd!==false && <AddToCart id={id}/>}
        </div>
      </div>
    </div>
  );
};

export default OneItem;