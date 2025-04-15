import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './components/useContext/useContext.jsx'
import { MealPlansContext } from './components/mealPlansContext/mealPlansContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <MealPlansContext>
    <FavoritesProvider> 
      <App />
    </FavoritesProvider>
    </MealPlansContext>
  </StrictMode>,
)
