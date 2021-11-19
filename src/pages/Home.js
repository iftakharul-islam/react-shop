import React from 'react';
import Products from '../components/Products';

function Home() {
  return (
    <>
      <div className="hero py-10">
        <div className="container flex items-center mx-auto justify- px-5">
          <div className="w-1/2 ">
            <h6 className="text-lg">
              <em>Are You Hungry?</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
            <button className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-full mt-4 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="https://github.com/codersgyan/react-shopping-cart/blob/main/public/images/pizza.png?raw=true"
              className="w-4/5"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
      <div className="pb-16">
        <Products />
      </div>
    </>
  );
}
export default Home;
