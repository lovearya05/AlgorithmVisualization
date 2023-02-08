import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
       <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <div className='upper__navbar'>
                <h3>DS</h3>
            </div>
            <div className='middle__navbar'>
                <div className='navigation'>
                    <Link to="/" className='nav__link'>Home</Link>
                    <Link to='/' className='nav__link'>Algorithms</Link>
                    <Link to="/" className='nav__link'>Search</Link>
                    <Link to="/" className='nav__link'>Activity</Link>
                </div>
            </div>
       </div>
        <div className='down__navbar'>
            <Link to="profile" className='nav__link' >Profile</Link>
        </div>
    </div>
  )
}

export default Navbar
