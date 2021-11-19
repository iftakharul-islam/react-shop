import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Menu() {
  const cartStyle = {
    borderRadius: '40px',
    padding: '4px 5px'
  };
  const logo = {
    height: '45px'
  };
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-5 py-2">
        <Link to="/">
          <img
            style={logo}
            src="https://github.com/codersgyan/react-shopping-cart/blob/main/public/images/logo.png?raw=true"
            alt="logo"
          />
        </Link>

        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6 ">
            <Link to="/cart">
              <div className="flex bg-yellow-400" style={cartStyle}>
                <span>10</span>
                <img
                  className="ml-1"
                  src="https://github.com/codersgyan/react-shopping-cart/blob/main/public/images/cart.png?raw=true"
                  alt="logo"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Menu;
