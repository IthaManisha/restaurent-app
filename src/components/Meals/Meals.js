import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals=()=>{
    return(
        <>
         <MealsSummary/>
         <div>
            <AvailableMeals />
         </div>
        </>
    )
}
export default Meals