import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
import rightImage from "../../assets/img2.png"

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup__left'>
        <div className='signup__left__image'>
            <img src={rightImage} alt='rightImage' />
            <h2>Data Structure and Algorithms Visualizer</h2>
        </div>
      </div>
      <div className='signup__right'>
        <form>
        <div className='signup__right__center'>
            <h2>Welcome!</h2>
         </div>
         <div className='signup__rightCenter'>
            <div className='signup__right__input'>
                <h3>Name</h3>
                <input type='text' placeholder='Enter your name.....' />
            </div>
            <div className='signup__right__input'>
                <h3>Email</h3>
                <input type='text' placeholder='Enter your name.....' />
            </div>
            <div className='signup__right__input'>
                <h3>Password</h3>
                <input type='password' placeholder='Enter your name.....' />
            </div>
            <div style={{display:'flex',justifyContent:"center"}}>
                <button className='submit__btn'>Signup</button>
            </div>
         </div>
        </form>
        <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>
            <h3 style={{marginRight:"15px"}} className="already__account">Already have’n account?</h3>
            <Link to="/login" className='login__account' >Login</Link>
        </div>
       
      </div>
    </div>
  )
}

export default Signup
