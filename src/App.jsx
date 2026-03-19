
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
import Accounts from './Accounts';
import Children from './children';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setuser } from './dataslice';

function App() {
let nav=useNavigate();
let dispatch=useDispatch();
let user=useSelector((state)=>state.user.users);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (userinfo) => {

    if (userinfo) {
      dispatch(setuser({
        uid: userinfo.uid,
        email: userinfo.email
      }));
    } else {
      nav("/");
      dispatch(setuser(null));
    }
  });

  return () => unsubscribe();
}, []);


useEffect(() => {
  if (user) {
    console.log("Redux user:", user);
  }
}, [user]);

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
      <Route path="/accounts" element={<Accounts/>}/>
    </Routes>
    </>
  )
}

export default App
