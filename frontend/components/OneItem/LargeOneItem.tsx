import React from 'react';
import './LargeOneItem.css';

interface LargeOneItemProps {
  image?: string;
  name?: string;
  price?: number;
}

const LargeOneItem: React.FC<LargeOneItemProps> = ({ image, name, price }) => {
  return (
    <div className="large-one-item">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price} TND</p>
    </div>
  );
}

export default LargeOneItem;
