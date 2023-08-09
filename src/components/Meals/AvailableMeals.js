import React from "react";
import classes from './AvailableMeals.module.css'

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

const AvailableMeals=()=>{
    const mealsList=DUMMYDATA.map((meal)=>
    <div className={classes.mealContainer}>
    <div>
    <ul className={classes.meals}>
        <b>{meal.name}</b><br/>
        <h>{meal.description}</h><br/>
        <b style={{color:"orange"}}>{meal.price}</b>
    </ul>
    </div>
    <div className={classes.mealActions }>
        <div>
        <label>Amount</label>
        <input type="number" min={1} max={5}/>
        </div>
        <button>+AddCart</button>
    </div>
    </div>
    )
    return(
        <>
        <ul>{mealsList}</ul>
        </>
    )
}
export default AvailableMeals