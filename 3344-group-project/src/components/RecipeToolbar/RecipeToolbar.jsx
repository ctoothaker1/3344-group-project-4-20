import React from "react";
import styles from "./RecipeToolbar.module.css";

const RecipeToolbar = ({
    isFavorite,
    onAddToFavorites,
    onAddToMealPlan,
    mealPlans,
    selectedMealPlan,
    onMealPlanSelect
  }) => {
    console.log("meal plans (toolbar): ", mealPlans)

    return (
      <div className={styles.toolbar}>
        <button 
          onClick={onAddToFavorites}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        {/* <button onClick={onAddToMealPlan}>Add to Meal Plan</button> */}
        {/*dropdown to select plan vvvvv*/}
        <select
        value={selectedMealPlan}
        onChange={onMealPlanSelect}
        className={styles.mealPlanSelect}
      >
        {mealPlans.map(plan => (
          <option key={plan.name} value={plan.name}>
            {plan.name}
          </option>
        ))}
      </select>
      </div>
    );
}
export default RecipeToolbar;