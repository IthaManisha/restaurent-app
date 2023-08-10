import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";


const HeaderCartButton=(props)=>{
    const cartctx=useContext(CartContext);
   const numOfCartItems=cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0)
   
    
    return(
        <>
        <button className={classes.button} onClick={props.cartOpenHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
           
        </button>
        </>
    )
}
export default HeaderCartButton