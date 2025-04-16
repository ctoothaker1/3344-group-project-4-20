// this file contains the structure for the components that will display 
// when a meal is clicked - this is the detailed recipe page.
import React, {useEffect,useState, useContext} from 'react';
import {useParams} from 'react-router-dom'; // this is used to get the idMeal from the URL
import styles from './Recipe.module.css';
import RecipeToolbar from '../../components/RecipeToolbar/RecipeToolbar';
import { MealPlansContext } from "../../components/mealPlansContext/mealPlansContext.jsx";

const Recipe = () => {
    const {idMeal} = useParams();
    const [recipe, setRecipe] = useState(null)
    const [isFavorite, setFavorite] = useState(false);
    const [favoritesList, setFavoritesList] = useState([]);
    const { mealPlans, setMealPlans } = useContext(MealPlansContext); // get locally stored meal plans

    const [selectedMealPlan, setSelectedMealPlan] = useState([]);

    const fetchRecipeDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/recipe/${idMeal}`);
            const data = await response.json();
            setRecipe(data.meals[0]); // only one result based on id, take first element in json
        }
        catch (error) {
            console.error("error fetching recipe details", error);
        }
    };

    useEffect(() =>{
        fetchRecipeDetails();
    }, [idMeal]);

    if (!recipe) return <p>Loading...</p>; /* if recipe has not been retrieved from api, display loading... */

    // function to toggle favorite from standalone recipe page. CSS TODO
    const toggleFavorite = () => {
        if (!isFavorite) {
            setFavoritesList(currentFavorites => [...currentFavorites, recipe]);
        } else {
            setFavoritesList(currentFavorites => currentFavorites.filter(item => item.name !== recipe.name));
        }
        setFavorite(existingList => !existingList);
        console.log('add to favorites btn clicked');
    };

    const addRecipeToMealPlan = () => {
        console.log(recipe, "should be added to ", selectedMealPlan)
    }

    // dropdown selection changed vvvvv
    const handleMealPlanSelect = (event) => {
        setSelectedMealPlan(Number(event.target.value));
      };



    return (
    <main className={styles.mainContent}>
        <RecipeToolbar /* pass all necessary properties */
        recipe={recipe} 
        isFavorite={isFavorite}
        onAddToFavorites={toggleFavorite}
        onAddToMealPlan={addRecipeToMealPlan}
        mealPlans={mealPlans}
        selectedMealPlanId={selectedMealPlan}
        onMealPlanSelect={handleMealPlanSelect}
        /> 
        <div className={styles.recipeContainer}>
            <div className={styles.leftContainer}>
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImg}/>
            </div>
            <div className={styles.rightContainer}>
                <div className = {styles.denseInfo}>
                    <div className={styles.denseInfoItem}>
                    <h3>Category </h3><p>{recipe.strCategory}</p>
                    </div>
                    <div className={styles.denseInfoItem}>
                    <h3>Style </h3><p>{recipe.strArea}</p>
                    </div>
                    {/* <div className={styles.denseInfoItem}>
                    <h3>Category: </h3><p>{recipe.strCategory}</p>
                    </div> */}
                </div>
                <h2>Instructions:</h2>
                <p>{recipe.strInstructions}</p>
                {/* embed strYoutube??? */}
            </div>
        </div>
    </main>
  );
}
export default Recipe;