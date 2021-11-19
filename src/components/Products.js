import React from 'react';
import { useState, useEffect } from 'react';
import Product from './Product';
import CartContext from '../CartContext';

function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?limit=50')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="container mx-auto pb-24 px-4">
        <h2 className="text-lg font-bold py-8">Products </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <Product keys={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
