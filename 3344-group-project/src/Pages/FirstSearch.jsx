// this file contains a blank search page layout
import React from 'react';
import Search from '../components/Search/Search';
import { useNavigate } from 'react-router-dom';

const FirstSearch = () => {
  
  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div>
      <h1>FirstSearch</h1>
      <Search onSearchSubmit={handleSearchSubmit} />
    </div>
  );

}
export default FirstSearch;