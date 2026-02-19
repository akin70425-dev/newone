import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setuser,setpassword ,setnumber} from './dataslice';

function Signin() {
let nav=useNavigate();
let users=useSelector((state)=>state.users.users);
let number=useSelector((state)=>state.users.number);
let password=useSelector((state)=>state.users.password);
let dispatch=useDispatch();


let[check,setcheck]=useState(true);

function handlecheck(){
  setcheck(!check)
}
function handlecreate(){
   dispatch(setuser())
   nav("/getstart")
}
  let handlelogo=()=>{
    nav('/')
  }
  
console.log(users);

  return (
    <>
    <div className="full-signin">
      <div className='container py-5'>
        <div className='row'>
        <div className='col-12'>
          <h2 id="logo" className='logo ' role='button' onClick={handlelogo}>NETFLIX</h2>
        </div>
      </div>
    
    <div className=' row signin-div py-5'>
      <div className='col-xl-5 col-lg-6 col-md-8 col-xs-2 signin-inner mt-3'>
        <h1 className="signin-h1">Sign In</h1>
        <div className="signin-btns">
        <input type='text' placeholder='Email or mobile number' value={number} onChange={e=>dispatch(setnumber(e.target.value))} required />
        <input type='Password' placeholder='Password' value={password} onChange={(e)=>dispatch(setpassword(e.target.value))} required />
        <button className='btn-signin mb-2' onClick={()=>{handlecreate(number)}}>Sign In</button>
        <p>OR</p>
        <button type="button" className='btn-usecode'>Use a sign-in code</button>
        <p className='pt-3'><Link className='link'>Forgot password?</Link></p>
        </div>
        <div id="footer">
        <input className="checkbox mb-3" type='checkbox' checked={check} onChange={()=>{}} onClick={()=>{handlecheck()}}/><span> Remember me</span>
        <p>New to Netflix?<span id='span'> <Link className='link' id="link">Sign up now.</Link></span></p>
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