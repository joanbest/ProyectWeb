import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importacion de componentes 
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import FilterPage from './Pages/FilterPage/FilterPage'
import Footer from './Components/Footer/Footer'
import DatosPersonales from './Pages/DatosPersonales/DatosPersonales'

const App = () => {
  
  

  return (
    <>
  
      <Header/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/details/:personaje/:id' element={<DetailsPage/>}/>
          <Route path='/filter/:genero' element={<FilterPage/>}/>
          <Route path='/DatosPersonales' element={<DatosPersonales/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    
    </>
  )
}

export default App