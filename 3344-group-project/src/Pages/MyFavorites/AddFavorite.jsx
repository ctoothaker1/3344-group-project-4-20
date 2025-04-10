import React, {useStgate,useEffect} from "react"

const [recipes,setRecipes]

const function AddFavorite()
{
    const [recipes,setRecipes]=useState([]);


    const isSelected=recipes.includes(recipes); //determines whether or not the recipe is in their list 

    const handleClick=()=>  //main priority is to modify
    {
        const updatedArray= isSelected //if the button was previously selected aka the user already added it to the list 
        ? //we know that the user is trying to remove it from their list (it was already added)
        recipes.filter(recipe=>recipe!=value)//we want to update the state of the array after removal
        :  [...recipes,value];

        setRecipes(updatedArray);
        getList(updatedArray); //we are gonna pass this to search results so that button will display
       

    };
    useEffect(()=>{
    localStorage.setItems("list", JSON.stringify(recipes)); //saving the array as a list within local storage 
 },[recipes] );

        return(
           <div>
            <button type="button" onClick={handleClick} style={{

                backgroundColor=isSelected ? "red": "green",
                color:"green",
            }}
            >
                 Add to List?
            </button>

           </div>
        )



}
export default AddFavorite;