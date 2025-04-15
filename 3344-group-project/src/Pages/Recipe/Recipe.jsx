// this file contains the structure for the components that will display 
// when a meal is clicked - this is the detailed recipe page.
import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'; // this is used to get the idMeal from the URL
import styles from './Recipe.module.css';
import RecipeToolbar from '../../components/RecipeToolbar/RecipeToolbar';

const Recipe = () => {
    const {idMeal} = useParams();
    const [recipe, setRecipe] = useState(null)
    const [isFavorite, setFavorite] = useState(false);
    const [favoritesList, setFavoritesList] = useState([]);
    const [mealPlan, setMealPlan] = useState([]);

    // console.log("idmeal: ",idMeal);
    const fetchRecipeDetails = async () => {
        try {
            // console.log("idmeal: ",idMeal);
            const response = await fetch(`http://localhost:5001/api/recipe/${idMeal}`);
            const data = await response.json();
            setRecipe(data.meals[0]); // only one result based on id, take first element in json
            // console.log(data.meals);
        }
        catch (error) {
            console.error("error fetching recipe details", error);
        }
    };

    useEffect(() =>{
        fetchRecipeDetails();
    }, [idMeal]);

    if (!recipe) return <p>Loading...</p>; /* if recipe has not been retrieved from api, display loading... */

    // function to toggle favorite from standalone recipe page.

    const toggleFavorite = () => {
        if (!isFavorite) {
            setFavoritesList(existingList => [...existingList, recipe]);
        } else {
            setFavoritesList(existingList => existingList.filter(item => item.name !== recipe.name));
        }
        setFavorite(existingList => !existingList);
    };


    // function to add a recipe to a meal pan
    const addToMealPlan = () => {
       // get selected plan name from dropdown, 
       // select day here?
      };





    return (
    <main className={styles.mainContent}>
        <RecipeToolbar recipe={recipe} 
        isFavorite={isFavorite}
        onAddToFavorites={toggleFavorite}
        onAddToMealPlan={addToMealPlan}
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