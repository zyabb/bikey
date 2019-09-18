import React, { useState, useEffect, useLayoutEffect } from 'react';
import Card from './Card';
import Cart from './Cart';
import './App.scss';
import bikeRentals from './data/items.js';

function App() {
  let initialCart = [];
  if (localStorage.getItem('items')) {
    initialCart = JSON.parse(localStorage.getItem('items'));
  }

  const [items, setItems] = useState([]);
  const [show, changeShow] = useState(false);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    setItems(bikeRentals.products);
  }, []);

  const update = () => {
    localStorage.setItem('items', JSON.stringify(cart));
    let initialCart = JSON.parse(localStorage.getItem('items'));
  };

  update();

  const showModal = () => {
    changeShow(true);
  };

  const hideModal = () => {
    changeShow(false);
  };

  const addToCart = item => {
    let tempCart = cart;
    tempCart.push(item);
    setCart(tempCart);
    update();
  };

  const cleanStorageAndState = () => {
    localStorage.clear();
    setCart([]);
  };

  const removeItem = id => {
    //use filter
    let tempCart = cart.filter((el, idx) => {
      return idx !== id;
    });
    setCart(tempCart);
    update();
  };

  return (
    <div className="App">
      <div id="bg"></div>
      <header>
        <div id="logo">
          <a href="">Bikey</a>
        </div>
        <div id="cart" onClick={showModal}>
          <i className="fas fa-shopping-cart fa-2x"></i>
        </div>
      </header>
      <main>
        <div className="reservation">
          <h1>Reservation Page</h1>
        </div>
        <section id="cards">
          {items.map(el => (
            <Card item={el} add={addToCart} key={el.id} />
          ))}
        </section>
      </main>
      <Cart
        show={show}
        items={cart}
        closeModal={hideModal}
        func={cleanStorageAndState}
        deleteItem={id => removeItem(id)}
      ></Cart>
    </div>
  );
}

export default App;
