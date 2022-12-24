import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
// import { createUserWithEmailAndPassword } from "firebase/auth";
import rightImage from "../../assets/img2.png"
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword } from "firebase/auth"
// ​​import {​​  getAuth,​​  signInWithPopup,​​  signInWithEmailAndPassword,​​  createUserWithEmailAndPassword,​​  signOut,
// ​​} from "firebase/auth";

const Signup = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
      name:"",
      email:"",
      password:""
  })

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // const registerWithEmailAndPassword = async (name, email, password) => {
  //   if (!values.name || !values.email || !values.password) {
  //         setErrorMsg("Fill all fields");
  //         return;
  //     }
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     // const user = res.user;
  //     // await addDoc(collection(db, "users"), {
  //     //   uid: user.uid,
  //     //   name,
  //     //   authProvider: "local",
  //     //   email,
  //     // });
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!values.name || !values.email || !values.password){
      setErrorMsg("Fill all fields");
    }else{
    function onRegister() {
      createUserWithEmailAndPassword(auth,values.email, values.password)
        .then((userCredential) => {
          // set(ref(db, "users/" + userCredential.user.uid), {
          //   firstName: firstName,
          //   lastName: lastName,
          //   email: email,
          // });

        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
    } 
  };

  // const handleSubmission = () => {
  //   if (!values.name || !values.email || !values.password) {
  //     setErrorMsg("Fill all fields");
  //     return;
  //   }
  //   setErrorMsg("");
  //   setSubmitButtonDisabled(true);
  //   createUserWithEmailAndPassword(auth, values.email, values.password)
  //     .then(async (res) => {
  //       setSubmitButtonDisabled(false);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       setSubmitButtonDisabled(false);
  //       setErrorMsg(err.message);
  //       console.log(err)
  //     });
  // };


  return (
    <div className='signup'>
      <div className='signup__left'>
        <div className='signup__left__image'>
            <img src={rightImage} alt='rightImage' />
            <h2>Data Structure and Algorithms Visualizer</h2>
        </div>
      </div>
      <div className='signup__right'>
        <form onSubmit={handleSubmit}>
        <div className='signup__right__center'>
            <h2>Welcome!</h2>
         </div>
         <div className='signup__rightCenter'>
            <div className='signup__right__input'>
                <h3>Name</h3>
                <input type='text' onChange={(event) => setValues((prev) => ({...prev, name:event.target.value}))}  placeholder='Enter your name.....' />
            </div>
            <div className='signup__right__input'>
                <h3>Email</h3>
                <input type='text' onChange={(event) => setValues((prev) => ({...prev, email:event.target.value}))}  placeholder='Enter your name.....' />
            </div>
            <div className='signup__right__input'>
                <h3>Password</h3>
                <input type='password'  onChange={(event) => setValues((prev) => ({...prev, password:event.target.value}))} placeholder='Enter your name.....' />
            </div>
            <b style={{fontWeight:" bold", fontFamily: 'Poppins', fontSize: "0.875rem",  color: "#ff3300",textAlign:"center"}}>{errorMsg}</b>
            <div style={{display:'flex',justifyContent:"center"}}>
                <button className='submit__btn_signup' disabled={submitButtonDisabled}>Signup</button>
            </div>
         </div>
        </form>
        <div style={{display:'flex',justifyContent:"space-around",padding:"0px 100px", alignContent:'center'}}>
            <h3 style={{marginRight:"15px"}} className="signup_already__account">Already have’n account?</h3>
            <Link to="/login" className='signup__account' >Login</Link>
        </div>
       
      </div>
    </div>
  )
}

export default Signup
