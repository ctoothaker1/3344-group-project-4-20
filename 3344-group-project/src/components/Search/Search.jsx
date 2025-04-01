import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
        <label for="search-box">Search:</label>
        <input id="search-box"  placeholder="What do you want to cook?"></input>
        <button type = "submit" onclick="search()">Search</button> 
        {/* run search function, redirect to search page*/ }

    </div>
    
  );
};
export default Search;