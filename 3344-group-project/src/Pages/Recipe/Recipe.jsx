// this file contains the structure for the components that will display 
// when a meal is clicked - this is the detailed recipe page.
import React from 'react';

// ******* Out of all the things we need to do, this is the most important

const Recipe = () => {



  return (
    <div>
      <h1>Recipe</h1>
      <p>a 'recipe' is a single meal</p>
      <h3>This page will: </h3>
      <ul>
        <li>Display a recipe after the user clicks something on a separate page to 'view details' about it</li>
        <li>Meal details are displayed in the components based on the idMeal parameter in the URL</li>
        <ul>
            <li>these details include: instructions, ingredients, measurements for ingredients, and more if we want.</li>
        </ul>
        <li>anything else?</li>
      </ul>


      {/* all components for detailed recipe page will go here */}

      
    </div>
  );

}
export default Recipe;