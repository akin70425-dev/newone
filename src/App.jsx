
import { useEffect } from 'react';
import './App.css';
import Intro from './Intro';
import Signin from './Signin';
import {Routes,Route} from "react-router-dom";
import Getstart from './Getstart';
import Home from './home';
import Tvshows from './tvshows';
import Movies from './Movies';
import New from './new';
import Children from './children';

function App() {

  /*fetch("https://fakestoreapi.com/users").then((response)=>{return response.json()}).then((data)=>{
    return console.log(data)
  })*/

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
