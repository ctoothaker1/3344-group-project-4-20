import { useState } from 'react'
// import siteLogo from '/siteLogo.svg'  -- we should make a logo
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchResults from './Pages/Search.jsx'
import FirstSearch from './Pages/Search.jsx'
function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            {/* Moved homepage elements to home file */}
            <Route path='/' element={<Home />} />
            <Route path='/search/' element={<FirstSearch />} />
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
