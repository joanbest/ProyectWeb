import React from 'react'
import './ErrorPage.css'
import goku from '../../img/gokusleeping.png'

const ErrorPage = () => {
  return (
    <section className="error-container">
      <img className='error-logo' src={goku} alt="Goku durmiendo" />
      <h1 className='error-title'>¡Oops! Página no encontrada</h1>
      <a href='/' className='error-button'>Volver al inicio</a>
    </section>
  )
}

export default ErrorPage
