import {createContext, useState, useEffect} from "react";

export const FavoritesContext =createContext();
  //this will act as a shared memory channel

    //this loads the current state of favorites whether it be filled or empty 
    export const FavoritesProvider=({children})=>
    {
    const [favorites,setFavorites]= useState(()=>
    {
    const savedFavorites=localStorage.getItem("list");
    return savedFavorites ? JSON.parse(savedFavorites): [];
    
    });
    //this will change the 
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(favorites));
      }, [favorites]);
        //provider is something we can use to pass the recipe list accross all components 
      return(
        <FavoritesContext.Provider value={{favorites,setFavorites}}>
        {children}
        </FavoritesContext.Provider>


      )
    }
  
    
    