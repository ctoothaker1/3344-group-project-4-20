// this file will be used when a user clicks  a meal plan
import React from 'react';
import styles from './MealPlan.module.css';
import {useContext} from "react";
import { useParams } from 'react-router-dom';
import { MealPlansContext } from "../../components/mealPlansContext/mealPlansContext.jsx";

const MealPlan = () => {

  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const { planName } = useParams(); // NAME from URL: /plan/:planname
  const { mealPlans, setMealPlans } = useContext(MealPlansContext);
  // Find the plan by name - name is unique - must warn user if they attempt to name same
  const plan = mealPlans.find(plan => plan.name == planName);

  if (!plan) return <p>Meal plan not found.</p>;




  // remove meal plan from specific day
  // and update meal plan in the context object (local storage) after removal
  const handleRemoveMeal = (day, idMeal) => {
    const updatedPlan = {
      ...plan,
      days: {
        ...plan.days,
        [day]: plan.days[day].filter(meal => meal.idMeal !== idMeal)
      }
    };

    const updatedPlans = mealPlans.map(p =>
      p.name === planName ? updatedPlan : p
    );
  
    setMealPlans(updatedPlans);
    localStorage.setItem("mealPlans", JSON.stringify(updatedPlans));

    };

  return (
    <main>
      <div className={styles.mealPlanContent}>
        {/* <h1>MealPlan</h1>
        <p>a meal plan is a selection of meals that have been assigned to days in the week</p>
        <h3>This page will: </h3>
        <ul>
          <li>Only be visited when a user clicks a specific plan from their 'MyPlans' page</li>
          <li>Have similar code to MyFavorites (except for grouping meals by designated day)</li>
          <li>display a day-day breakdown of meals within the plan.</li>
          <li>meals will be clickable, or there can be a button that displays on hover that redirects to the recipe page</li>
          <li>display all meals in the selected mealplan</li>
          <li>allow users to delete meals from the plan (buttons appear on meal plan hover... reuse code from favorites)</li>
          <li>Allow the user to delete the meal plan from this page</li>
          <li>allow the user to rename the meal plan from this page</li>
          <li>anything else?</li>
        </ul> */}

        <h1>{plan.name}</h1>
        {/* INCLUDE FUNCTIONALITY TO RENAME PLAN */}
        <hr />
        {/* EACH DAY OF THE WEEK DISPLAYED IN A SECTION */}
        {daysOfWeek.map(day => (
          <section key={day}>
            <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3> {/*format days of week */}
            <div className={styles.mealRow}>
              {plan.days[day] && plan.days[day].length > 0 ? (
                plan.days[day].map(meal => (
                  <div key={meal.idMeal} className={styles.mealCard}>
                    {console.log("adding ",plan.days[day], meal.idMeal, meal.strMeal, " to UI")}
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strMeal}</p>
                    {/* REMOVE BUTTON ON recipe hover */}
                    <button onClick={() => handleRemoveMeal(day, meal.idMeal)}>Remove</button>
                  </div>
                ))
              ) : (
                <p>No meal assigned</p>
              )}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
};

export default MealPlan;