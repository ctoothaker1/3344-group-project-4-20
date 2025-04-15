// this file contains a user's meal plans page layout
import styles from './MyPlans.module.css';
import React, { useContext } from "react";
import { MealPlansContext } from "../../components/mealPlansContext/mealPlansContext";
import { useNavigate } from "react-router-dom";

// MEAL PLANS in their simplest form are an array of idMeals, each idMeal is a recipe.
// each meal plan needs a name, 7 days, meals that correspond to each day 
// (some days can be empty if user has not assigned any meals to that day)
// clicking a meal plan will route to /plan/planname where the detailed data is displayed
// they can edit a plan on a separate page...? implementation TBD


const MyPlans = () => {

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

  return (
    <main>
      {/* <h1>MyPlans</h1>
      <p>a 'meal plan' is a selection of meals that the user assigns to specific days.</p>
      <h3>This page will: </h3>
      <ul>
        <li>display all meal plans saved in local storage in cards with basic details</li>
        <li>allow users to delete meal plans (select functionality for mass deleting plans, buttons appear on meal plan hover...)</li>
        <li>allow users to edit meal plans (select functionality, button on hover...)</li>
        <li>anything else?</li>
      </ul> */}
      {/* all components for mymeals will go here */}

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
      
    </main>
  );

}
export default MyPlans;