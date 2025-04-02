// this file contains search page layout when /search/somequery is in the url
import React from 'react';
import { useState } from 'react';
import { useParams  } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search/Search';

const SearchResults = () => {

  const { query } = useParams();
  const [results, setResults] = useState([]); // store the search results
  const navigate = useNavigate();

  useEffect(() => {
    //simulate search results until api implemented
    // replace with the actual api call that returns results
    //need other functions to get the data from each recipe returned by the api in order to display quick look information
    const simulatedResults = [
      'Green salad with avocado',
      'taco salad',
      'egg salad',
      'chicken salad',
    ].filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(simulatedResults);
  }, [query]); // this effect runs whenever the query changes

    //execute this when search is performed
    const handleSearchSubmit = (searchQuery) => {
        // redirect to /search/{query} when search submitted so we can use the query in the url in code
        navigate(`/search/${searchQuery}`);
      
    };

  return ( // display results under search bar
      
      <div>
      <h1>{results.length} results for "{query}"</h1>
      <Search onSearchSubmit={handleSearchSubmit} />
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className='resultItem'>{result}</li>
          ))}
        </ul>
      ) : (
        <p>No results for "{query}".</p> 
      )}
    </div>

  );
};

export default SearchResults;