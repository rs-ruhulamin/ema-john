// CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import productsData from '../../../public/fakeData/products.json';
import { getDatabaseCart } from '../../utilities/fakedb';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  
  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map( existingKey => {
        const product = productsData.find( pd => pd.key === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
    } )
    setCart(previousCart);
}, [])



  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
