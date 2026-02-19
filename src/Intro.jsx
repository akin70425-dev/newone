import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Reason from './Reason';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { resetfull, setemail } from './dataslice';

function Intro() {
let dispatch=useDispatch();
let email=useSelector((state)=>state.users.email)
let users=useSelector((state)=>state.users.users)
  let nav=useNavigate();
    let sim=">"
function start(){
  let test=users.find((data)=>{
    return data.number===email
  })
  if(test){
    nav('/getstart')
  }
  else{
  dispatch(resetfull())
  }
}
function navigate(){
  nav('/signin')
}

  return (
    <>
    <div className=' full-con img-fluid'>
      <div className='container py-5'>
    <div className='row'>
    <div className='col-12 navbars'>
 <h2 className='logo'>NETFLIX</h2>
    <ul className='navs'>
        <li><Form.Select aria-label="Default select example" className='selects'>
      <option value="1">English</option>
      <option value="2">Hindi</option>
    </Form.Select></li>
        <li><button type="button" className='btns ho' onClick={navigate}>Sign in</button></li>
    </ul>
    </div>
      </div>
      </div>
   
    <div className='container py-5 ctn-1 '>
        <div className='row '>
          <div className='col-12 ctn-1-con'>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149.Cancel at any time.</p>
        <p className='pt-3'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        </div>
    
        <div className='row ctn-1-btns'>
        <div className='col-12 ctn-1-btns-con'>
        <input type="email" placeholder='Email address' value={email} 
        onChange={(e)=>{return dispatch(setemail(e.target.value))}} required/>
        <button type="button " className="ho" onClick={start}>Get Start {sim}</button>
        <hr className='hr'></hr>
        </div>
        </div>
        </div>
        </div>
      
        <Reason />
        <Footer />
   </>
  )
}

export default Intro