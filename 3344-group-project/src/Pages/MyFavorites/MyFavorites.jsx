// this file contains a user's favorite meals 
import React from 'react';
import styles from './MyFavorites.module.css'
import { FavoritesContext } from "../../components/useContext/useContext.jsx";
import {useContext} from "react";
import { Link } from "react-router-dom";

const MyFavorites = () => {
//essentially we are going to grab the local storage from 
//add Favorites 
//we are going to display it 
//and then we are going to allow the opportunity remove from the list
// to do this we need 

  const { favorites, setFavorites }=useContext(FavoritesContext);
  const handleRemove =(e) =>
  {
      const updated=favorites.filter(r=>r.idMeal!=e.target.value);
      setFavorites(updated);
  }
  
  return (
    <main>
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>My Favorites</h2>
      <hr className={styles.divider} />
      {favorites.length === 0 ? (
        <p className={styles.emptyMsg}>No favorite recipes yet. Go find something tasty!</p>
      ) : (
        <div className={styles.favoritesGrid}>
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} className={styles.favoriteCard}>
              <Link to={`/recipe/${recipe.idMeal}`} className={styles.recipeLink}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className={styles.recipeImage}
                />
                <h3 className={styles.recipeTitle}>{recipe.strMeal}</h3>
              </Link>
              <button
                value={recipe.idMeal}
                onClick={handleRemove}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </main>
  );
};

export default MyFavorites;