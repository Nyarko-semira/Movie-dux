import React from 'react'
import '../Components/styles.css'
import logo from '../../src/assets/resources/resources/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo' alt="" />
        <h2 className='app-subtitle'>It's time for popcorn! Find your next movie here.</h2>
      
    </div>
  )
}

export default Header
