import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; 

function Accounts() {
  let dispatch = useDispatch();

  async function logout() {
    await signOut(auth);         
  }

  return (
    <div>
      <button onClick={()=>{logout()}}>log out</button>
    </div>
  )
}

export default Accounts;