import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Showproduct1 from './Showproduct1';
import { addToDatabaseCart} from '../utilities/fakedb';
import { useCart } from '../Header/Cart/CartContext';
import { useProduct } from '../Database/ProductsProvider';



const Showproduct = () => {

    const { DoneUrl } = useParams();
    const [product, setProduct] = useState(null); // Initialize product state as null
    const urlkey = DoneUrl.split("-").pop().split(".")[0];

    // Assuming you have a custom hook called useProduct()
    const { GetAllProducts } = useProduct();

    useEffect(() => {
        // Find the first product matching the URL key
        const matchedProduct = GetAllProducts.find(product => product.key === urlkey);
        
        // Set the matched product to the product state
        setProduct(matchedProduct);
    }, [urlkey, GetAllProducts]);


        const {cart, setCart} = useCart();
       
        

    
        const cartdetails = (product, value) =>{
            const toBeAddedKey = product.key;
            const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
            let count = parseInt(value);
            let newCart;
            if(sameProduct){
                count = sameProduct.quantity + count;
                sameProduct.quantity = count;
                const others = cart.filter(pd => pd.key !== toBeAddedKey);
                newCart = [...others, sameProduct];
            }
            else{
                product.quantity = count;
                newCart = [...cart, product];
            }
            setCart(newCart);
            addToDatabaseCart(product.key, count);
        }
    
 
    


    return (
        <div>
            <div className='container'>

                <div className="row pt-5">
                    <div className="col-md-12">
                        {product ? (

                            <Showproduct1 product={product} cartdetails={cartdetails}  > </Showproduct1>

                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>
       
                </div>
            </div>

        </div>
    );
}

export default Showproduct;