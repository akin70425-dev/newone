import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; 

function Accounts() {

  async function logout() {
    await signOut(auth);         
  }

  return (
    <div>
      <button className='logout-btn' onClick={()=>{logout()}}>log out</button>
    </div>
  )
}

export default Accounts;