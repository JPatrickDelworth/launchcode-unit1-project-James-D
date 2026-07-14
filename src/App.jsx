import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import HomePage from './components/pages/home/HomePage'
import CharNClassPage from './components/pages/charNclass/CharNClassPage'
import PricePage from './components/pages/price/PricePage'
import AboutPage from './components/pages/about/AboutPage'
import Header from './components/layout/Header'

function App() {


  return (
    <BrowserRouter>



      <div>



        <Header />



      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="char" element={<CharNClassPage />} />
        <Route path="price" element={<PricePage />} />
        <Route path="about" element={<AboutPage />} /> 
      </Routes>


    </BrowserRouter>
        

  







    
  )
}

export default App
