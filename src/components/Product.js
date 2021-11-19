import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
function Product(props) {
  const { product } = props;
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e, product) => {
    e.preventDefault();
    let _cart = { ...cart }; // { items: {}}
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
  };
  return (
    <Link to={`product/${props.product.id}`}>
      <div className="m-4 my-6 shadow-lg p-4">
        <img src={product.image} alt="peparoni" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.title} </h2>
          <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">
            {product.category}
          </span>
        </div>
        <div className="flex justify-between mt-4 items-center ">
          <span>${product.price} </span>
          <button
            onClick={(e) => addToCart(e, product)}
            className="bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600 hover:text-white"
          >
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
export default Product;
