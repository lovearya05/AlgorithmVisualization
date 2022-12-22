import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import rightImage from "../../assets/1461311b1661a6faab7f7779163ab9a3.png"
import "./Login.css"
import { auth } from "../../firebase";
import { signInWithEmailAndPassword} from "firebase/auth"


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then(() =>{
        navigate("/")
      })
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

 

  return (
    <div className='login'>
      <div className='login__left'>
        <div className='login__left__image'>
            <img src={rightImage} alt='rightImage' />
            <h2>Data Structure and Algorithms Visualizer</h2>
        </div>
      </div>
      <div className='login__right'>
        {/* <form> */}
        <div className='login__right__center'>
            <h2>Hello Again!</h2>
         </div>
         <div className='login__rightCenter'>
            <div className='login__right__input'>
                <h3>Email</h3>
                <input type='text' value={email}
          onChange={(e) => setEmail(e.target.value)}
           placeholder='Enter your name.....' />
            </div>
            <div className='login__right__input'>
                <h3>Password</h3>
                <input type='password' value={password}
          onChange={(e) => setPassword(e.target.value)}
           placeholder='Enter your name.....' />
            </div>
            <div style={{display:'flex',justifyContent:"center"}}>
                <button className='submit__btn' onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
            </div>
         </div>
        {/* </form> */}
        <div style={{display:'flex',justifyContent:"space-around",padding:"0px 100px", alignContent:'center'}}>
            <h3 style={{marginRight:"15px"}} className="already__account">Dont have’n account?</h3>
            <Link to="/signup" className='login__account' >Signup</Link>
        </div>
       
      </div>
    </div>
  )
}

export default Login
