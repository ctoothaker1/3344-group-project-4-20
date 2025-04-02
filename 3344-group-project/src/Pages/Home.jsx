// this file returns the home page 
// contains routing functionality for search
import React from 'react';
import { useNavigate } from 'react-router-dom'
// import siteLogo from '/siteLogo.svg'  -- we should make a logo
// import './App.css'
import Search from '../components/Search/Search'

function Home() {

  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim()) {
      // redirect to standalone search page
      navigate(`/search/${searchQuery}`);
    }
  }

  return (
    <>
        <main>
        <Search onSearchSubmit={handleSearchSubmit}/>
          {/* Brief paragraph about our site? */}
          {/* Featured Recipes */}
          {/*  */}
        </main>
    </>
  )
}

export default Home
