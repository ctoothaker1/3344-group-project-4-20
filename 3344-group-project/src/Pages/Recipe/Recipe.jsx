// this file contains the structure for the components that will display 
// when a meal is clicked - this is the detailed recipe page.
import React, {useEffect,useState, useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom'; // this is used to get the idMeal from the URL
import styles from './Recipe.module.css';
import RecipeToolbar from '../../components/RecipeToolbar/RecipeToolbar';
import { MealPlansContext } from "../../components/mealPlansContext/mealPlansContext.jsx";
import { FavoritesContext } from '../../components/useContext/useContext.jsx';

const Recipe = () => {
    const {idMeal} = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null)
    const [isFavorite, setFavorite] = useState(false);
    const { favorites, setFavorites }=useContext(FavoritesContext);
    const { mealPlans, setMealPlans } = useContext(MealPlansContext); // get locally stored meal plans

    // states to handle dropdowns in toolbar
    const [selectedMealPlan, setSelectedMealPlan] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    // state for toggling dropdown visability
    const [showPlanForm, setShowPlanForm] = useState(false);


    const fetchRecipeDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/recipe/${idMeal}`);
            const data = await response.json();
            setRecipe(data.meals[0]); // only one result based on id, take first element in json
            console.log("data.meals 0: ",data.meals[0]);
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
            setFavorites(currentFavorites => [...currentFavorites, recipe]);
            
        } else {
            setFavorites(currentFavorites => currentFavorites.filter(item => item.name !== recipe.strMeal));
        }
        setFavorite(existingList => !existingList);
        console.log('add to favorites btn clicked, adding ',recipe.strMeal, " to favorites");
        
    };

    const handleAddToPlanClick = () => {
        if (mealPlans.length === 0){
            // display create plan button in 'add to plan' button's place.
            // navigate to meal plans page if create plan button clicked.
            //  toggle create new plan component visability on /myplans
            navigate('/myplans');
        } else{
            setShowPlanForm(true);
            // set a default plan in dropdown
            setSelectedMealPlan(mealPlans[0].name);
        }
    }

    // dropdown selection changed vvvvv
    const handleMealPlanSelect = (event) => {
        setSelectedMealPlan(event.target.value);
      };


    // handle day selection changed
    const handleDaySelect = (event) => {
        const day = event.target.value;
        setSelectedDay(day);
        addRecipeToMealPlan(day);
    }
    // add recipe to meal plan, given day and using selectedMealPlan
    const addRecipeToMealPlan = (day) => {
        if (!selectedMealPlan || !day) return;
        console.log(recipe, "should be added to ", selectedMealPlan, day);
        const updatedMealPlans = mealPlans.map(plan => {
            if (plan.name === selectedMealPlan) {
              if (day === "unassigned") {
                return { ...plan, unassigned: [...plan.unassigned, recipe] };
              } else {
                return {
                  ...plan,
                  days: {
                    ...plan.days,
                    [day]: plan.days[day] ? [...plan.days[day], recipe] : [recipe]
                  }
                };
              }
            }
            return plan;
          });
          setMealPlans(updatedMealPlans);
          localStorage.setItem("mealPlans", JSON.stringify(updatedMealPlans));
          console.log(`${recipe.strMeal} successfully added to ${selectedMealPlan} on ${day}`);
          // hide dropdowns to add to a plan and day, optionally alert the user that recipe has been added.
          setShowPlanForm(false);
    };

    return (
    <main className={styles.mainContent}>
        <RecipeToolbar /* pass all necessary properties */
            isFavorite={isFavorite}
            onAddToFavorites={toggleFavorite}
            mealPlans={mealPlans}
            showPlanForm={showPlanForm}
            selectedMealPlan={selectedMealPlan}
            onMealPlanSelect={handleMealPlanSelect}
            selectedDay={selectedDay}
            onDaySelect={handleDaySelect}
            onAddToPlanClick={handleAddToPlanClick}
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