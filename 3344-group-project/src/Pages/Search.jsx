// this file contains search page layout
import React from 'react';
import { useState } from 'react';
import { useParams  } from 'react-router-dom';
import Search from '../components/Search/Search';

const SearchResults = () => {

  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState([]);
  
  
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
    setResults(simulatedResults);}, [query]);

    //execute when search is performed
    const handleSubmit = (event) => {
      event.preventDefault();
      if (searchQuery.trim()) {
        // redirect to /search/{query}
        navigate(`/search/${searchQuery}`);
      }
    };


  return (
      
      /* <Search /> */
      <div>
      <h1>{results.length} results for "{query}"</h1>
      <Search onSearchSubmit={(searchQuery) => window.location.href = `/search/${searchQuery}`} />
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