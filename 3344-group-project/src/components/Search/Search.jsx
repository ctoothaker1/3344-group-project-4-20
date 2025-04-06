import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";

//search component with input and button

const Search = ({onSearchSubmit}) => {

    const [searchQuery, setSearchQuery] = useState('');


    const handleInputChange = (event) => { // change search query as it changes
        setSearchQuery(event.target.value);
      };

    const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
        onSearchSubmit(searchQuery);  //Onsearch submit is an object containing a string and an array
    }
    };





    


  return (

    <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit}>
        <label htmlFor="search-box">Search:</label>
        <input type ="text" id="search-box" value={searchQuery} onChange={handleInputChange} placeholder="What do you want to cook?"></input>
        <button type = "submit">Search</button> 
        {/* run search function, redirect to search page*/ }
        </form>
    </div>
   

    
  );
};
export default Search;