import React from 'react';
import './Card.scss';
const Card = ({ item, add }) => {
  return (
    <div className="card" key={item.id}>
      <div>
        {' '}
        <img src={item.image} alt=""></img>
      </div>
      <div className="description">
        <h2 className="title">{item.name}</h2>
        <h2 className="price">${item.price}</h2>
        <h2 className="type">#{item.product_type}</h2>
      </div>
      <div className="btn" onClick={() => add(item)}>
        <a>Add to cart</a>
      </div>
    </div>
  );
};
export default Card;
