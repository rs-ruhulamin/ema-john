import React, { useState } from 'react';
import { useCart } from './CartContext';
import './cart.css';
import { addToDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedb';

const Cart = () => {

  const { cart, setCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  console.log(cart);
  
  // 
  
  const [isOn, setIsOn] = useState(false);

  const toggleOn = () => {
    setIsOn(true);
  };

  const toggleOff = () => {
    setIsOn(false);
  };


// Function to increase the quantity of an item in the cart
const increaseQuantity = (key) => {
  const updatedCart = cart.map(item => {
    if (item.key === key) {
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      addToDatabaseCart(key, updatedItem.quantity); // Update local storage
      return updatedItem;
    }
    return item;
  });
  setCart(updatedCart); // Update cart state
};

// Function to decrease the quantity of an item in the cart
const decreaseQuantity = (key) => {
  const updatedCart = cart.map(item => {
    if (item.key === key && item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      addToDatabaseCart(key, updatedItem.quantity); // Update local storage
      return updatedItem;
    }
    return item;
  });
  setCart(updatedCart); // Update cart state
};



 // Function to remove an item from the cart
 const cartremove = (key) => {
  // Filter out the item to remove from the cart
  const updatedCart = cart.filter(item => item.key !== key);
  // Update the cart state
  setCart(updatedCart);
  // Optionally, remove the item from the database
  removeFromDatabaseCart(key); // Assuming removeFromDatabaseCart is defined elsewhere
};

  return (
    <div className='cart-area ms-5'>
      {/*  */}
      <div className="Cart-icon">

        <div className='Cart-icon-box position-relative' onClick={toggleOn} disabled={isOn} > <i className='fa fa-cart-shopping'></i>

          {/*  */}
          <span className=' position-absolute'> {cart.length}</span>
        </div>
      </div>

      <div className={`box ${isOn ? 'active' : ''}`}>


        <div className=''>
          <button onClick={toggleOff} disabled={!isOn}>Turn Off</button>
          {/* {isOn ? <h1>On</h1> : <h1>Off</h1>} */}

          {/*  */}

    <div className="cp-box d-flex flex-column">
    {cart.map(product => (
                        <li key={product.key} className='car-product-list list-unstyled d-inline-block'>
                            <div className=' d-flex'>
                             <div className="">
                             <img src={product.img} alt={product.name} />
                             </div>
                                <div className="">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                                <button className='cart-product-remove ' onClick={() => cartremove(product.key)}> Remove </button>

                                <button onClick={() => increaseQuantity(product.key)}>+</button>
            <button onClick={() => decreaseQuantity(product.key)}>-</button>
                                </div>
                            </div>
                        </li>
                    ))} 
    </div>
          {/*  */}

          <p> Total Product: {totalPrice} < /p>

        </div>
      </div>

    </div>
  );
};

export default Cart;