import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { setemailcopy} from './dataslice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeemailcopy } from './dataslice';

function Footer() {

  let nav=useNavigate();
    let sim=">"
    let emailcopy=useSelector((state)=>state.user.emailcopy)
   let dispatch=useDispatch();
    
    function getnav(){
      if(emailcopy){
        nav("/signin");
        dispatch(removeemailcopy());
      }
    }

  return (
    <>
    <div className="container py-5 footer-con">
        <div className="row footer-btns">
            <div className="col-12 ">
                <p className='pb-4'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='buttons pb-5'>
                <input type="email" placeholder='Email address'className='getinput' onChange={(e)=>{dispatch(setemailcopy(e.target.value))}} value={emailcopy}  required/>
                        <button type="button " className="ho" onClick={()=>{getnav()}}>Get Start {sim}</button>
                </div>
            </div>
        </div>
        <div className="row py-5">
          <div className="col-12">
            <p className='pb-3'>Questions? <u role='button'>Call 000-800-919-1743</u> </p>
          </div>
        <div className="row  info">
            <div className="col-3 "><p role='button'>FAQ<br/>
            Investers Relations<br/>
            Privacy <br />
            Speed Test
            </p>
            </div>
            <div className="col-3 "><p role='button'>Help Center<br/>
            Jobs<br/>
            Cookie Preferences<br />
            Legal Notices
            </p>
            </div>
            <div className="col-3 "><p role='button'>Account<br/>
            Ways to Watch<br/>
            Corparate Information<br />
            Only on Netflix
            </p></div>
            <div className="col-3 "><p role='button'>Media Center<br/>
            Trems of Use<br/>
            Privacy <br />
            Contact Us
            </p></div>
            </div>
            </div>
            <Form.Select aria-label="Default select example" className='eh-1 mb-4'>
      <option value="1">English</option>
      <option value="2">Hindi</option>
    </Form.Select>
        <p >Netflix India</p>
        <footer className='pt-2'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </footer>
    </div>
    </>
  )
}

export default Footer