import React, { useState, useContext } from 'react';
import classes from './AvailableMeals.module.css';
import CartContext from '../../store/cart-context';
import  '../Layout/Header.module.css';
const DUMMYDATA=[
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },                                                                               
]

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = (meal) => {
    if (quantity > 0) {
      cartCtx.addItem({
        id: meal.id,
        name: meal.name,
        amount: quantity,
        price: meal.price,
      });
    }
    console.log(quantity);

    setQuantity(1); // Reset quantity after adding to cart
  };

  const onQuantityChangeHandler = (event) => {
    const inputQuantity = +event.target.value; // Convert to a number
    setQuantity(inputQuantity);
  };

  const mealsList = DUMMYDATA.map((meal) => (
    <div className={classes.mealContainer} key={meal.id}>
      <div>
        <ul className={classes.meals}>
          <b>{meal.name}</b>
          <br />
          <p>{meal.description}</p>
          <b style={{ color: '#b94517' }}>{meal.price}</b>
        </ul>
      </div>
      <div className={classes.mealActions}>
        <div>
          <label>Amount{'    '}</label>
          <input
            type="number"
            min={1}
            max={5}
            value={quantity}
            onChange={onQuantityChangeHandler}
          />
        </div>
        <button style={{cursor: 'pointer',
            backgroundColor:'#b94517', 
            border:'none',
            color: 'white',
            display: 'flex',
            justifyContent:'space-around',
            alignItems: 'center',
            borderRadius: '20px',
            fontWeight: 'bold',
            padding:'15px',
           marginTop:'10px'}}
        onClick={() => addToCartHandler(meal)}>Add Cart</button>
      </div>
    </div>
  ));

  return <ul>{mealsList}</ul>;
};

export default AvailableMeals;
