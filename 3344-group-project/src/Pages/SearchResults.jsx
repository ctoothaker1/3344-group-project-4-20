// this file contains search page layout when /search/somequery is in the url
import React from 'react';
import { useState } from 'react';
import { useParams  } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Search from '../components/Search/Search';

function ProcessResults(resultsJson){
  // process the results from the API call
  // this function is not used yet, but we can use it to process the data returned by the API
  const processedResults = resultsJson.map((result) => {
    return {
      title: result.recipe.label,
      image: result.recipe.image,
      url: result.recipe.url,
    };
  });
  return processedResults;
}



const SearchResults = () => {
  const {query} = useParams();
  
  const [results, setResults] = useState([]); // store the search results
  const navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  const [loading, setLoading] = useState(false); //loading state=false by default

  //API CALL with provided query
  const fetchSearchResults = async (query) => {
    setLoading(true); // fetching data, set loading to true
    
    try
    {
      // this should be the endpoint we created in the server
      //const response = await fetch(`/api/recipes?query=${query}`); // //`http://localhost:5000/api/recipes?query=${query}`
      const response = await fetch(`http://localhost:5000/api/recipes?query=${query}`);
      console.log("response variable: ",response);
      
      const data = await response.json(); // set data to json API response ERRRRRROR

      console.log("fetched data variable (searchresults.jsx): ",data); // returns error response from line 52 in server.mjs
      
      if (data.meals){//translate the data
        setResults(data.meals); 
      }
      else{
        setResults([]); // no results found, set results to empty array to avoid errors
      }

    }
    catch(error)
    {
      console.error("error fetching recipes from API (in SearchResults.jsx)", error);
      // alert("error fetching recipes from API (in SearchResults.jsx)", error);
    }
    finally
    {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSearchResults(query); 
  },[query]); 


    //execute this when search is performed
    const handleSearchSubmit = (searchQuery) => {
        // redirect to /search/{query} when search submitted so we can use the query in the url in code
        navigate(`/search/${searchQuery}`);
      
    };
    console.log("length of results: ",results.length);

  return ( // display results under search bar
      
      <div>
      <h1>{results.length} results for "{query}"</h1>
      <Search onSearchSubmit={handleSearchSubmit} />
      <ul>
      {results.length > 0 ? (
        results.map((result, index) => (
            <li key={index} className='resultItem'>
            <h3>{result.strMeal}</h3>
            <img src={result.strMealThumb} alt={result.strMeal}/>
            {/* Link to detailed recipe page */}
            
            </li>
          ))
      ) : (
        <p>No results for "{query}".</p> 
      )}
      </ul>
    </div>

  );
};

export default SearchResults;