import React from 'react'
import "../src/App.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import MoviesGrid from './Components/MoviesGrid'

const App = () => {
  return (
    <div className='App'>
      <div className="container">
      <Header/>
      <MoviesGrid/>
      </div>

      <Footer/>


      
    </div>
  )
}

export default App

