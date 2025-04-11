// this file returns the home page 
// contains routing functionality for search
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import siteLogo from '/siteLogo.svg'  -- we should make a logo
// import './App.css'
import Search from '../../components/Search/Search';
import './Home.css';

function Home() {

  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim()) {
      // redirect to standalone search page
      navigate(`/search/${searchQuery}`);
    }
  };

  return ( // HOME PAGE LAYOUT
    <>
        <main className="homepage">
          <div className="homepage-content">
            <div className="homepage-row">
              <div className="homepage-left">
                <h1 className="homepage-title">This is the Homepage</h1>
                <Search onSearchSubmit={handleSearchSubmit}/> {/* search component*/}
              </div>
              <div className="homepage-right">
                <p className="homepage-description">
                  Welcome to <strong>Recipe Advisor</strong> - your personalized meal planning/ Recipe Search Assistant!
                  Easily search for delicious recipes from around  the world, customize your own meal plans, and save
                  all your favorites all in one place. Whether you're cooking for health, fun, or family, we've got the 
                  perfect recipe for you. 
                </p>
              </div>
            </div>
          </div>
          {/* Brief paragraph about our site? */}
          {/* Featured Recipes (breakfasts??)*/}
          {/* Featured Recipes (lunches??)*/}
          {/* Featured Recipes (dinners??)*/}
          {/* Featured Recipes (random??)*/}
          {/* Component for new users: EX button to create your first meal plan, and a button to search*/}
        </main>
    </>
  );
}

export default Home
