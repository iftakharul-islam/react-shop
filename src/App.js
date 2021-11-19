import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Menu from './components/Menu';
import SingleProduct from './components/SingleProduct';
import { CartContext } from './CartContext';

export default function App() {
  const [cart, setCart] = useState({});
  //empty object
  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </CartContext.Provider>
      </Router>
    </div>
  );
}
