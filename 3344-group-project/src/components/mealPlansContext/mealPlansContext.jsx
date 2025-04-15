// context object for meal plans. deals with retrieving, adding and deleting from local storage.
// based on Ian's work from favorites context.
// meal plans have a custom object structure since we are dealing with days of the week.

import { createContext, useState, useEffect } from "react";

export const MealPlansContext = createContext(); // create context

//provider component. handles retrieval.
export const MealPlansProvider = ({ children }) => {
    const [mealPlans, setMealPlans] = useState(() => {
      const savedPlans = localStorage.getItem("mealPlans");
      return savedPlans ? JSON.parse(savedPlans) : [];
    });
  
    // handles saving a meal plan to local storage
    useEffect(() => {
        localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
      }, [mealPlans]);

    return (
    <MealPlansContext.Provider value={{ mealPlans, setMealPlans }}>
        {children}
    </MealPlansContext.Provider>
    );
};