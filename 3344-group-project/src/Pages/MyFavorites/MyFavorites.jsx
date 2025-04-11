// this file contains a user's meal plans page layout
import React from 'react';
import styles from './MyFavorites.module.css'
import AddFavorites from './AddFavorite.jsx'
import {  useState, useEffect } from 'react';

const MyFavorites = () => {
//essentially we are going to grab the local storage from 
//add Favorites 
//we are going to display it 
// and then we are going to allow the opportunity remove from the list
  // to do this we need 

  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("list");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  
  return (
    <div classname={styles.listContainer}>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map(recipe =>
        (
        <li key={favorites.idMeal>}>{favorites.strMeal}</li>
      
        ))
      };
      </ul>

      
    </div>
  );

}
export default MyFavorites;