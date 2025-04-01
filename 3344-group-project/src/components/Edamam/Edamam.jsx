import React from "react";


// api  INCOMPLETE
const Edamam = () => {

    const query = null;
    const baseUrl = import.meta.env.VITE_EDAMAM_BASEURL
    const endpoint = `${baseUrl}/api/somethingElse`

    const fetchRecipes = () => {
        fetch(endpoint).then((response) => response.json())
        .then((data) => console.log(data));
    };

    

}