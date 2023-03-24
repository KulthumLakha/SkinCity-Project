import React, { useState } from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart(props) {
  const { cartItems } = props;

  return (
    <div>
        <section className="contact-wrapper-1 py-1">
            <h2 className="h2 mb-4"> Shopping Cart </h2>
        </section>
        <section className="contact-wrapper-1 py-1">
            {cartItems.length === 0 ? (
                <> 
                    <p> <b><BsExclamationCircle /> Cart is empty </b> </p>
                    <p> <Link className="black-link py-2 mb-1" to="/"> Start shopping </Link> </p>
                </>
            ) : (
                <div className="product-list-container">
                    <ul className="product-list">
                        {cartItems.map((item, index) => (
                            <li className="product-container" key={item.id}>
                                <img
                                className="product-image"
                                src={item.image}
                                alt={item.name}
                                />
                                <h2 className="product-title">{item.name}</h2>
                                <p className="product-description">{item.description}</p>
                                <span className="product-description">
                                    ${item.price.toFixed(2)}
                                </span>
                                <button className="remove-from-cart-button">
                                   Remove from Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    </div>
  );
}

export default Cart;