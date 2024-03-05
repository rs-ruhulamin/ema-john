import React, { useEffect, useState } from 'react';
import "./shop.css";
import Product from '../Product/Product';
import Slider from '../Header/Slider/Slider';
import { useProduct } from '../Database/ProductsProvider';



const Shop = () => {



const { GetAllProducts } = useProduct();


  const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(GetAllProducts);

  const data = GetAllProducts;










  return (
    <>
    
    <Slider></Slider>

    <div className='shop_area container pt-5 '>
      {/* Render fetched data here */}
      <div className="row">
        <div className="col-md-12">
          <h2 className='mp_title text-primary text-uppercase'>Shop</h2>
          <div className="main-product w-100 ">

            {data && data.map(item => <Product key={item.id} products={item}  />)}
          </div>
        </div>
     
      </div>



    </div >

    </>





  );






};

export default Shop;