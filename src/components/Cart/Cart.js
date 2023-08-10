import React,{useContext} from "react";
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  /*const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <ul key={item.id}>
        <h2>{item.name}</h2>
        <li>{item.amount}</li>
        </ul>
      ))}
    </ul>
  );*/
  const cartctx=useContext(CartContext);
  const cartItems = (
    <ul >
      {cartctx.items.map((item) => (
        <div key={item.id} className={classes.total}>
        <div>
        <li>
          <h3>{item.name}</h3> 
          <div style={{display:"flex",flexDirection:'row'}}>
          <p>${item.price}</p>
          <p>X{item.amount}</p>
          </div>
        </li>
        </div>
        <div className={classes.actions}>
        <button onClick={()=>cartctx.addItem(item)}>+</button>
        <button onClick={()=>cartctx.removeItem(item.id)}>-</button>
        </div>
        </div>
      ))}
    </ul>
  );
  
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.cartHideHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;