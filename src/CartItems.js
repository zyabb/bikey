import React, { useState, useEffect } from 'react';
import './CartItems.scss';
const CartItems = ({ items, func, deleteItem }) => {
  return (
    <div>
      {items.map((el, idx) => (
        <div className="cart" key={idx}>
          <h2>
            {el.name} - ${el.price}
          </h2>
          <i className="fas fa-times fa-2x" onClick={() => deleteItem(idx)} />
        </div>
      ))}
      <div className="btn" style={{ marginBottom: '10px' }} onClick={func}>
        <a>Purchase now</a>
      </div>
    </div>
  );
};

export default CartItems;
