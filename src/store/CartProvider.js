
import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to add an item to the cart
const addItemToCartHandler = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      // Item already exists, update its amount
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
        )
      );
    } else {
      // Item is new, add it to the cart
      setCartItems((prevItems) => [...prevItems, item]);
    }
  
    // Update the total amount
    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
  };
  
  const removeItemFromCartHandler = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
  
    if (existingItem) {
      if (existingItem.amount === 1 || existingItem.amount === 0) {
        // If item has only 1 quantity, remove it from cart
        setTotalAmount(0)
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        
      } else {
        // Reduce quantity and update total amount
        const updatedItems = cartItems.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
        setCartItems(updatedItems);
      }
  
      // Update total amount by subtracting the item's price
      if(existingItem.amount>1){
      setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);
      }
    }
  };
  
  
  
  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
