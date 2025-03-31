import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>

      <div id="leftContainer">
        <h1>Recipe Advisor</h1>
      </div>
      <div id='rightContainer'>
        <nav>
          <ul className={styles.navLinks}>
              <select name="dinners" id="dinners">
                <option value="" disabled selected>Dinners</option>
                <option value="5-ingredient">5-Ingredient Dinners</option>
                <option value="one-pot">One-Pot Meals</option>
                <option value="easy">Easy Meals</option>
              </select>
              <select name="lunches" id="lunches">
                <option value="" disabled selected>Lunches</option>
                <option value="5-ingredient">5-Ingredient Meals</option>
                <option value="sandwich">Sandwich Ideas</option>
                <option value="soups">Soups</option>
              </select>
              <select name="breakfasts" id="breakfasts">
                <option value="" disabled selected>Breakfasts</option>
                <option value="5-ingredient">5-Ingredient Meals</option>
                <option value="sandwich">Sandwich Ideas</option>
                <option value="soups">Soups</option>
              </select>
              <li><a href="">My Meals</a></li>
              <li><img src="../../src/assets/search.png" alt="Search Icon" /></li>
              {/*search icon source: <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by chehuna - Flaticon</a>*/ }

          </ul>
        </nav>
      </div>
      
      
    </header>
  );
};
export default Header;