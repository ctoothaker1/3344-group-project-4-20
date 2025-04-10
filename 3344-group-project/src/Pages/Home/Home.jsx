// this file returns the home page 
// contains routing functionality for search
import React from 'react';
import { useNavigate } from 'react-router-dom'
// import siteLogo from '/siteLogo.svg'  -- we should make a logo
// import './App.css'
import Search from '../../components/Search/Search'

function Home() {

  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim()) {
      // redirect to standalone search page
      navigate(`/search/${searchQuery}`);
    }
  }

  return ( // HOME PAGE LAYOUT
    <>
        <main style={{ padding: "40px 20px", display: "block" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}>
          
          <h1>this is the homepage</h1>
          <Search onSearchSubmit={handleSearchSubmit}/> {/* search component*/}
          {/* Brief paragraph about our site? */}
          {/* Featured Recipes (breakfasts??)*/}
          {/* Featured Recipes (lunches??)*/}
          {/* Featured Recipes (dinners??)*/}
          {/* Featured Recipes (random??)*/}
          {/* Component for new users: EX button to create your first meal plan, and a button to search*/}
          </div>
        </main>
    </>
  )
}

export default Home
