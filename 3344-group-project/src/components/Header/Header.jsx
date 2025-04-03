import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Header = () => {

  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    navigate(`/search/`);
  };

  return (
    <header className={styles.header}>

      <div id="leftContainer">
        <h1>Recipe Advisor</h1>
      </div>
      <div id='rightContainer'>
        <nav>
          <ul className={styles.navLinks}>
              <li><Link to="/">Home</Link></li>
              {/* <select name="Search" id="search">
                <option value="" >Search</option>
                <option value="filter">5-Ingredient Dinners</option>
                <option value="one-pot">One-Pot Meals</option>
                <option value="easy">Easy Meals</option>
              </select> */}
              <li><a href="">My Meals</a></li>
              <li><Link to='/search/'><img src="../../src/assets/search.png" alt="Search Icon" /></Link></li>

              {/*search icon source: <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by chehuna - Flaticon</a>*/ }

          </ul>
        </nav>
      </div>
      
      
    </header>
  );
};
export default Header;