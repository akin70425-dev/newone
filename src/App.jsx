
import { useEffect } from 'react';
import './App.css';
import Intro from './Intro';
import Signin from './Signin';
import {Routes,Route, useNavigate} from "react-router-dom";
import Getstart from './Getstart';
import Home from './home';
import Tvshows from './tvshows';
import Movies from './Movies';
import New from './new';
import Children from './children';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
let nav=useNavigate();
useEffect(()=>{
  const check=onAuthStateChanged(auth,(user)=>{
    
      if (user) {
        nav("/home");  
      } else {
        nav("/"); 
      }
  })
  return check;
},[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Intro/>}></Route>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/getstart' element={<Getstart />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tvshows' element={<Tvshows/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/children" element={<Children/>}/>
    </Routes>
    </>
  )
}

export default App
