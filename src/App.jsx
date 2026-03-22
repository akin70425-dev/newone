
import { useEffect } from 'react';
import './App.css';
import Intro from './Intro';
import Signin from './Signin';
import {Routes,Route, useNavigate} from "react-router-dom";
import Home from './home';
import Tvshows from './tvshows';
import Movies from './Movies';
import New from './new';
import Accounts from './Accounts';
import Children from './children';
import { onAuthStateChanged, reload } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setuser } from './dataslice';

function App() {
let nav=useNavigate();
let dispatch=useDispatch();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (userinfo) => {

    if (userinfo) {
      dispatch(setuser({
        uid: userinfo.uid,
        email: userinfo.email
      }));

      if (location.pathname === "/"||"/signin") {
        nav("/home");
      }

    } else {
      dispatch(setuser(null));

      const privateRoutes = ["/home", "/movies", "/tvshows","/accounts","/new","/children"];

      if (privateRoutes.includes(window.location.pathname)) {
        nav("/");
      }
    }

  });

  return unsubscribe;
}, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Intro/>}></Route>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tvshows' element={<Tvshows/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/children" element={<Children/>}/>
      <Route path="/accounts" element={<Accounts/>}/>
    </Routes>
    </>
  )
}

export default App
