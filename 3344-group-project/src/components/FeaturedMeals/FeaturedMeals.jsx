// Displays a selection x featured meals. Ideally, this will have a horizontal scrollbar.
// designed for implementation on the home page.
// need to use an additional api call (app.get()) to get a random meal x number of times.
// www.themealdb.com/api/json/v1/1/random.php, add IDs to array, then use other app.get(recipe) to get needed data for each
import React from "react";
import styles from "./FeaturedMeals.module.css";
import { useState } from 'react';


const Featured = () => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]); // meals array to store meal data

  const fetchRandomMeal = async () => {
    setLoading(true);
    const endpoint = `http://localhost:5001/api/random`;
    try{
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.meals){
        meals.push(data.meals); // set meals to the fetched data
      }
      else{
        setMeals([])
      }
    }
    catch(error){
      console.error("error fetching random meal (featuredmeals.jsx)",error);
    }
    finally{
      setLoading(false);
    }
  }

  // Fetch random meals when the component mounts
  React.useEffect(() => {
    setLoading(true); 
    const fetchMeals = async () => {
      const mealPromises = Array.from({ length: 6 }, fetchRandomMeal); // Fetch 6 random meals
      await Promise.all(mealPromises);
      setMeals(meals); // Set the meals state to the fetched meals
    };
    fetchMeals();
     // Set loading to false after fetching
     setLoading(false);
  }, []);


  return (

    <div className={styles.featuredContainer}> {/* horizontal by default, vertical in @media */}
      <h2>Featured Meals</h2>
      <div className={styles.featuredMeals}>
        {loading ? (
          <p>Loading...</p>
        ) : meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className={styles.mealCard}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <p>{meal.strCategory}</p>
            </div>
          ))
        ) : (
          <p>No featured meals available.</p>
        )}
      </div>


    </div>
   

    
  );
};
export default Featured;
