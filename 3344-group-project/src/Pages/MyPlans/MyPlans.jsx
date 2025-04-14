// this file contains a user's meal plans page layout
import React from 'react';
import styles from './MyPlans.module.css';

// MEAL PLANS in their simplest form are an array of idMeals, each idMeal is a recipe.
// each meal plan needs a name, 7 days, meals that correspond to each day 
// (some days can be empty if user has not assigned any meals to that day)
// clicking a meal plan will route to /plan/planname where the detailed data is displayed
// they can edit a plan on a separate page...? implementation TBD


const MyPlans = () => {

  return (
    <main>
      <h1>MyPlans</h1>
      <p>a 'meal plan' is a selection of meals that the user assigns to specific days.</p>
      <h3>This page will: </h3>
      <ul>
        <li>display all meal plans saved in local storage in cards with basic details</li>
        <li>allow users to delete meal plans (select functionality for mass deleting plans, buttons appear on meal plan hover...)</li>
        <li>allow users to edit meal plans (select functionality, button on hover...)</li>
        <li>anything else?</li>
      </ul>


      {/* all components for mymeals will go here */}

      
    </main>
  );

}
export default MyPlans;