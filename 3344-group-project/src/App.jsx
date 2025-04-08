import { useState } from 'react'
// import siteLogo from '/siteLogo.svg'  -- we should make a logo
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchResults from './Pages/SearchResults/SearchResults.jsx'
import FirstSearch from './Pages/FirstSearch.jsx'
import MyMeals from './Pages/MyMeals.jsx'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/' element={<FirstSearch />} />
            <Route path='/mymeals/' element={<MyMeals/>}/>
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
