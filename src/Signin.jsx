import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import { removeemailcopy } from './dataslice';

function Signin() {
let nav=useNavigate();
const dispatch=useDispatch();
let emailcopy=useSelector((state)=>state.user.emailcopy)
let[password,setpassword]=useState("");
let[email,setemail]=useState(""||emailcopy);
let[check,setcheck]=useState(true);

function handlecheck(){
  setcheck(!check)
}
function createuser() {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userinfo) => {

      await sendEmailVerification(userinfo.user);

      alert("Verification email sent . Please check your inbox.");

    })
    .catch((error) => {
      alert(error.message);
    });

  setemail("");
  setpassword("");
  
}

function signin() {
  signInWithEmailAndPassword(auth, email, password)
    .then((userinfo) => {
      const user = userinfo.user;

      if (user.emailVerified) {
        nav("/home"); 
      } else {
        alert("Please verify email");
      }
    })
    .catch((error) => {
      alert(error.message);
    });

  setemail("");
  setpassword("");
  dispatch(removeemailcopy( ))
}

  let handlelogo=()=>{
    nav('/')
  }

  return (
    <>
    <div className="full-signin">
      <div className='container py-5'>
        <div className='row'>
        <div className='col-12'>
          <h2 id="logo" className='logo ' role='button' onClick={handlelogo}>NETFLIX</h2>
        </div>
      </div>
    
    <div className=' row signin-div  py-5'>
      <div className='col-xl-5 col-lg-6 col-md-8 col-xs-2 signin-inner p-5 mt-3'>
        <h1 className="signin-h1">Sign In</h1>
        <div className="signin-btns">
        <input type='text' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} required />
        <input type='Password' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
        <button className='btn-signin mb-2' onClick={()=>{signin()}}>Sign In</button>
        </div>
        <div id="footer">
        <input className="checkbox mb-3" type='checkbox' checked={check} onChange={()=>{}} onClick={()=>{handlecheck()}}/><span> Remember me</span>
        <p>New to Netflix?<span id='span'> <Link className='link' role='button' id="link" onClick={()=>{createuser()}}>Sign up now.</Link></span></p>
          <p>This page is protected by Google reCAPTCHA TO ensure you're not a bot.</p>
        </div>
      </div>
    </div>
      </div>
      
    </div>
    </>
  )
}
export default Signin