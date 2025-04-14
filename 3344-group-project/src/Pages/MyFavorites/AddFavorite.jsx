import { FavoritesContext } from "../../components/useContext/useContext.jsx";
import {useContext} from "react";

//this function is the decider of the user's interactions on the searchResults page 
            //does the user want to add or remove ? 
            // and it does so accordingly 
            //this page also provides a button to do so 
function AddFavorite({favorite})
{
    const { favorites, setFavorites } = useContext(FavoritesContext);

    //If the user redirects, e.g. leaves the page 
    //we want to make sure that we are saving their favorites 
    //this useState will allow use to grab the state via our previously saved local storage
    // and then initialize them as the default useState

    const isSelected=favorites.some(f=>f.idMeal==favorite.idMeal); //determines whether or not the recipe is in their list 
    //if there is some instance of the passed in recipe in our array we know that the user has already saved it into the list 

    const handleClick=()=>      //main priority is to modify
    {
        const updatedArray= isSelected    //if the button was previously selected aka the user already added it to the list 
        ?                                 //we know that the user is trying to remove it from their list (it was already added)
        favorites.filter(f=>f.idMeal!=favorite.idMeal)//we want to update the state of the array after removal
        :  [...favorites,favorite];
        setFavorites(updatedArray);
        //we are gonna pass this to search results so that button will display                                    
    };
        return(
           <div>
            <button type="button" onClick={handleClick} style={{
                backgroundColor: isSelected ? "red" : "green",
                color: "white"
            }}>{isSelected? "Remove from List ": "Add to List"}</button>
           </div>
        )
}
export default AddFavorite;