import React from "react";
import styles from "./RecipeToolbar.module.css";

const RecipeToolbar = ({
    isFavorite,
    onAddToFavorites,
    mealPlans,
    showPlanForm,
    selectedMealPlan,
    onMealPlanSelect,
    selectedDay,
    onDaySelect,
    onAddToPlanClick,
    onCreatePlanClick
  }) => {
    console.log("meal plans (toolbar): ", mealPlans)

    const dayAssignments = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];

    return (
      <div className={styles.toolbar}>
        <button 
          onClick={onAddToFavorites}
          className={ /* change red when favorited, similar to search */
            isFavorite ? `${styles.favoriteBtn} ${styles.favorited}`
            : styles.favoriteBtn
          }>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

      {/* show 'add to plan' by default */}
      {!showPlanForm && (
        <button onClick={onAddToPlanClick} className={styles.nonFavoriteButton}>
          Add to Plan
        </button>
      )}

      {/* If meal plans exist and 'add to plan' button clicked, show the two dropdowns */}
      {showPlanForm && mealPlans.length > 0 && (
        <div className={styles.planForm}>
          <select
            value={selectedMealPlan}
            onChange={onMealPlanSelect}
            className={styles.mealPlanSelect}
          >
            <option value="" >Select Plan</option>
            {mealPlans.map(plan => (
              <option key={plan.name} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
          <select
            value={selectedDay}
            onChange={onDaySelect}
            className={styles.daySelect}
          >
            <option value="">Select Day</option>
            {dayAssignments.map(day => (
              <option key={day} value={day}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* If no meal plans exist, show 'create plan' button */}
      {showPlanForm && mealPlans.length === 0 && (
        <button onClick={() => (onCreatePlanClick()) } className={styles.nonFavoriteButton}>
          Create a Plan
        </button>
      )}
      </div>
    );
}
export default RecipeToolbar;