import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";

//search component with input and button

const Search = ({ onSearchSubmit }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const[diets,setDiets]= useState([]);

    const handleInputChange = (event) => { // change search query as it changes
        setSearchQuery(event.target.value);
      };

    const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
        onSearchSubmit({searchQuery, diets});  //Onsearch submit is an object containing a string and an array
    }
    };
    const handleDiets = (event)=>
    {
      const { value,checked }=event.target;


      if(checked){
        setDiets(prev=>[...prev,value]); //previous value now becomes [whatever the array was before, the new checked value]
      }
      else{
        setDiets(prev=>prev.filter(diet=>diet!=value)) //prev now equals an array full of diets that aren't the current value *(the user unchecks a diet)
      }



    }



  return (

    <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit}>
        <label htmlFor="search-box">Search:</label>
        <input type ="text" id="search-box" value={searchQuery} onChange={handleInputChange} placeholder="What do you want to cook?"></input>
        <button type = "submit">Search</button> 
        {/* run search function, redirect to search page*/ }
        </form>
        <section>
            <label>
              <input type="checkbox" value="balanced" checked={diets.includes("balanced")} onChange={handleDiets}/>balanced
            </label>
            <label>
              <input type="checkbox" value="high-fiber" checked={diets.includes("high-fiber")} onChange={handleDiets}/>high-fiber
            </label>
            <label>
              <input type="checkbox" value="high-protein" checked={diets.includes("high-protein")} onChange={handleDiets}/>high-protein
            </label>
            <label>
              <input type="checkbox" value="low-carb" checked={diets.includes("low-carb")} onChange={handleDiets}/>low-carb
            </label>
            <label>
              <input type="checkbox" value="low-fat" checked={diets.includes("low-fat")} onChange={handleDiets}/>low-fat
            </label>
            <label>
              <input type="checkbox" value="low-sodium" checked={diets.includes("low-sodium")} onChange={handleDiets}/>low-sodium
            </label>



      </section>
    </div>
   

    
  );
};
export default Search;