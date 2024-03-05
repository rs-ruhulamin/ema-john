import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {

  const [GetAllProducts, SetAllProducts] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('/public/fakeData/products.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
        
          SetAllProducts(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, []);


// 



// import { useProduct } from '../Database/ProductsProvider';
// const { GetAllProducts } = useProduct();

// console.log(GetAllProducts);






// 

  return (
    <ProductContext.Provider value={{ GetAllProducts, SetAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
