import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Reason from './Reason';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setemailcopy,removeemailcopy } from './dataslice';

function Intro() {
let emailcopy=useSelector((state)=>state.user.emailcopy)
let sim=">"
let nav=useNavigate();
const dispatch=useDispatch();

function navigate(){
  nav('/signin')
}
function getnav(){
      if(emailcopy){
        nav("/signin");
      }
    }

  return (
    <>
    <div className=' full-con img-fluid'>
      <div className='container py-5'>
    <div className='row'>
    <div className='col-lg-10 col-md-7 col-9'>
 <h2 className='logo'>NETFLIX</h2>
    </div>
    <div className='col-lg-1 col-md-4 col-2 d-lg-block d-md-block d-none'>
       <Form.Select aria-label="Default select example" className='eh mb-4'>
      <option value="1">English</option>
      <option value="2">Hindi</option>
    </Form.Select>
    </div>
    <div className='col-lg-1 col-md-1  col-3 '>
        <button type="button" className='btns ho' onClick={navigate}>Sign in</button>
    
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
        <input type="email" placeholder='Email address'className='getinput' onChange={(e)=>{dispatch(setemailcopy(e.target.value))}} value={emailcopy}  required/>
        <button type="button " className="ho" onClick={()=>{getnav()}}>Get Start {sim}</button>
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