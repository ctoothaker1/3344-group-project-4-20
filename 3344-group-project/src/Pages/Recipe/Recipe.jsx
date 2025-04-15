// this file contains the structure for the components that will display 
// when a meal is clicked - this is the detailed recipe page.
import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'; // this is used to get the idMeal from the URL
import styles from './Recipe.module.css';
import RecipeToolbar from '../../components/RecipeToolbar/RecipeToolbar';

const Recipe = () => {
    const {idMeal} = useParams();
    const [recipe, setRecipe] = useState(null)

    console.log("idmeal: ",idMeal);
    const fetchRecipeDetails = async () => {
        try {
            console.log("idmeal: ",idMeal);
            const response = await fetch(`http://localhost:5001/api/recipe/${idMeal}`);
            const data = await response.json();
            setRecipe(data.meals[0]); // only one result based on id, take first element in json
            console.log(data.meals);
        }
        catch (error) {
            console.error("error fetching recipe details", error);
        }
    };

    useEffect(() =>{
        fetchRecipeDetails();
    }, [idMeal]);

    if (!recipe) return <p>Loading...</p>; /* if recipe has not been retrieved from api, display loading... */

    return (
// <div>
// <h1>Recipe</h1>
// <p>a 'recipe' is a single meal</p>
// <h3>This page will: </h3>
// <ul>
//     <li>Display a recipe after the user clicks something on a separate page to 'view details' about it</li>
//     <li>Meal details are displayed in the components based on the idMeal parameter in the URL</li>
//     <ul>
//         <li>these details include: instructions, ingredients, measurements for ingredients, and more if we want.</li>
//     </ul>
//     <li>anything else?</li>
// </ul>
// </div>
    <main className={styles.mainContent}>
        <RecipeToolbar recipe={recipe} /> 
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