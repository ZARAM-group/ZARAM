import Image from "next/image";
import "./OneItem.css"

interface OneItemProps{
  title?: string;
  price?: number;
  image?: string
}

const OneItem: React.FC<OneItemProps> = ({name,price,image}) => {
  return (
    <div>
      <div className="item-container">
        <Image src={image} alt="image" width={300} height={500}/>
        <div className="details-container">
          <p>{name}</p>
          <p>{price} TND</p>
        </div>
      </div>
    </div>
  );
};

export default OneItem;