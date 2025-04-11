import {createContext, useContext, useState, useEffect} from "react";

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

      return(
        <FavoritesContext.Provider value={{favorites,setFavorites}}>
        {children}
        </FavoritesContext.Provider>


      )
    }
  
    
    