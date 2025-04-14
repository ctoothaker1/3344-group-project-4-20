// this file contains a user's meal plans page layout
import React from 'react';
import styles from './MyFavorites.module.css'
import { FavoritesContext } from "../../components/useContext/useContext.jsx";
import {useContext} from "react";
import { Link } from "react-router-dom";

const MyFavorites = () => {
//essentially we are going to grab the local storage from 
//add Favorites 
//we are going to display it 
// and then we are going to allow the opportunity remove from the list
  // to do this we need 

  const { favorites }=useContext(FavoritesContext);

  
  return (
    <div className={styles.container}>
      <h2>My Favorites</h2>
      <hr className={styles.divider} />
      <ul>
  {favorites.map(recipe => (
    <li key={recipe.idMeal} className={styles.favoritesList}>
      <Link to={`/recipe/${recipe.idMeal}`} className={styles.linktext}>
        {recipe.strMeal}
      </Link>
    </li>
  ))}
  </ul>

      
    </div>
  );

}
export default MyFavorites;