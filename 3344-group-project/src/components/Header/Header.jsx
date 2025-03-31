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
                <option value="one-pot">Sandwich Ideas</option>
                <option value="easy">Soups</option>
              </select>
              <li><a href="#about">About</a></li>

          </ul>
        </nav>
      </div>
      
      
    </header>
  );
};
export default Header;