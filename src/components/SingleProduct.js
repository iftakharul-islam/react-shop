import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
function SingleProduct() {
  const [product, setProduct] = useState({});
  const parans = useParams();
  const url = `https://fakestoreapi.com/products/${parans.id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((e) => console.log(e));
  }, [parans.id]);
  const history = useHistory();
  console.log(history);
  return (
    <div className="grid m-6">
      <div clasclass="col-12 ">
        <button
          onClick={() => {
            history.goBack();
          }}
          className="bg-gray-500 py-1 mb-12 px-4 rounded-full font-bold hover:bg-yellow-600 hover:text-white"
        >
          Back
        </button>
      </div>
      <div className="mb-10 col-6 md:flex">
        <img src={product.image} className="md:max-w-xs" alt="peparoni" />
        <div className="ml-6">
          <div>
            <h2 className="text-lg font-bold py-2">{product.title} </h2>
            <span className="bg-gray-200 py-1 px-4 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          <div className="mt-4 ">
            <span>${product.price} </span>
            <button
              className=" max-w-max bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-600 hover:text-white
          max-w-10"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
