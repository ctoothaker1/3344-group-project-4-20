import React from "react";
import styles from "./RecipeToolbar.module.css";

const RecipeToolbar = ({ onAddToFavorites, onAddToMealPlan }) => {
  return (
    <div className={styles.toolbar}>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
      <button onClick={onAddToMealPlan}>Add to Meal Plan</button>
    </div>
  );
}
export default RecipeToolbar;