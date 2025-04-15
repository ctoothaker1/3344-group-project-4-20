// structure and logic for the MyPlans COMPONENT
// displays all the users meal plans 
// that have been created and stored in local storage.

// DO NOT USE ----------------------------- changed file structure so this code is on the page, not in a component.


import React, { useContext } from "react";
import { MealPlansContext } from "../../components/mealPlansContext/mealPlansContext";
import { useNavigate } from "react-router-dom";
import styles from "./Plans.module.css";




const Plans = () => {
    const { mealPlans, setMealPlans } = useContext(MealPlansContext);
    const navigate = useNavigate();
  
    const handlePlanClick = (plan) => {
      // go to detailed plan view
      navigate(`/plan/${plan.name}`);
    };
  
    const handleDeletePlan = (planId) => {
      // filter out plan that was deleted so it is not displayed
      const updatedPlans = mealPlans.filter(plan => plan.id !== planId);
      setMealPlans(updatedPlans);
    };

    return ( // component UI
    <div className={styles.plansContainer}>
        <h1>My Meal Plans</h1>
        <div className={styles.plans}> {/* loop through plans and display each */}
            {mealPlans.length > 0 ? (
            mealPlans.map(plan => (
                <div key={plan.name} className={styles.planCard}>
                <h3>{plan.name}</h3>
                {/* OTHER PLAN DETAILS */}
                <button onClick={() => handlePlanClick(plan)}>View Plan</button>
                <button onClick={() => handleDeletePlan(plan.id)}>Delete</button>
                </div>
            ))
            ) : (
            <p>No meal plans have been created. Create a new one!</p>
            )}
        </div>
    </div>
    );
};
export default Plans;