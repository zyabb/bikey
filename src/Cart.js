import React from 'react';
import './Cart.scss';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
const Cart = ({ show, items, closeModal, func, deleteItem }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Your cart</h1>
        <i className="fas fa-times fa-2x" onClick={closeModal} />
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItems
            items={items}
            func={func}
            deleteItem={id => deleteItem(id)}
          />
        )}
      </section>
    </div>
  );
};

export default Cart;
