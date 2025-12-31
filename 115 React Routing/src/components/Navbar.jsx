import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    

  return (
    <header style={{backgroundColor: 'grey' , padding: '10px', width: '100%'}}>
      <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li style={{listStyleType: 'none', textDecoration: 'underline'}}>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li style={{listStyleType: 'none', textDecoration: 'underline'}}>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li style={{listStyleType: 'none', textDecoration: 'underline'}}>Contact us</li></NavLink>
      </nav>
    </header>
  )
}

export default Navbar
