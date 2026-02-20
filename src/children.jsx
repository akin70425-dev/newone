import React from 'react'
import "./children.css"
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Children() {

    let [movies,setmovies]=useState([]);
    let [scifi_movies,setscifi_movies]=useState([]);
    let [horror_movies,sethorror_movies]=useState([]);
    let [comady_movies,setcomady_movies]=useState([]);
    

    useEffect(() => {
  fetch("/db.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
      setmovies(data.movies);
      setscifi_movies(data.movie2);
      sethorror_movies(data.movie3);
      setcomady_movies(data.movie4);
    });
}, []);
let hero=[
    {"id":1,"img":"images/race.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(6, 4, 29, 1))"},
    {"id":1,"img":"images/lion.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(52, 28, 6, 1))"},
    {"id":1,"img":"images/kung.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(59, 7, 9, 1))"},
    {"id":1,"img":"images/tom.jpeg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(60, 9, 9, 1))"},
]

let randommovies=[...movies].sort(()=>Math.random()-0.5);
let randomscifi_movies=[...scifi_movies].sort(()=>Math.random()-0.5);
let randomhorror_movies=[...horror_movies].sort(()=>Math.random()-0.5);
let randomcomady_movies=[...comady_movies].sort(()=>Math.random()-0.5);
const randomhero = hero[Math.floor(Math.random() * hero.length)];




    
  return (
    <>
     <div className="children-hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgb(0,0,0)), url(${randomhero.img})`}}>
    <div className="container">

        <div className="row pb-5 pt-4 menu">
            <div className="col-10 d-flex">
                <h2 className='logo'>NETFLIX</h2>
                <p ><Link to="/home" className='tvshows-links'>Home</Link></p>
                <p><Link to="/tvshows" className='tvshows-links'>Tv Shows</Link></p>
                <p><Link to="/movies" className='tvshows-links'>Movies</Link></p>
                <p><Link to="/new" className='tvshows-links'>New & Popular</Link></p>
            </div>
            <div className="col-2 d-flex">
                <p ><Link to="/children" className='tvshows-links'>Children</Link></p>
                <p ><Link to="/children" className='tvshows-links'>Accounts</Link></p> 
            </div>
        </div>
        <div className="row  hero-con">
            <div className="col-12">
                
                <h1>WEDNESDAY</h1>
                <p>A quiet town, a hidden experiment, and a mysterious parallel world collide as a group of brave kids <br /> uncover dark secrets and face terrifying forces beyond imagination,where friendship <br />becomes their greatest strength against the unknown.</p>
            </div>
        </div>
        <div className="row hero-cons">
            <div className="col-12">
                <button>Play</button>
                <button className='m-2'>More info</button>
            </div>
        </div>

    </div>
    </div>

    
    <div className="container critical">


<div className="row pb-3">
            <div className="col-12">
                <h3>Critically Acclaimed Tv Shows</h3>
            </div>
        </div>
        
        <div className="row g-3 pb-5 flex-nowrap critical-roll">
            {
                randommovies.slice(0,20).map((data)=>{
                return <div className="col-2 critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" />
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Scifi Movies</h3>
            </div>
        </div>
        
        <div className="row g-3 pb-5 flex-nowrap critical-roll">
            {
                randomscifi_movies.slice(0,20).map((data)=>{
                return <div className="col-2 critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" />
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Horror Movies</h3>
            </div>
        </div>
        <div className="row g-3 pb-5 flex-nowrap critical-roll">
            {
                randomhorror_movies.slice(0,20).map((data)=>{
                return <div className="col-2 critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" />
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Comady Movies</h3>
            </div>
        </div>
        <div className="row g-3 pb-5 flex-nowrap critical-roll">
            {
                randomcomady_movies.slice(0,20).map((data)=>{
                return <div className="col-2 critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" />
    </div>} )
            }
</div>


    </div>
    <div className="container-fluid py-5 footer-con" style={{background:`${randomhero.bg}`}}>
        <div className='innerfooter'>
        <div className="row pt-4 pb-3">
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
        <p >Netflix India</p>
        <footer className='pt-2'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </footer>
        </div>
    </div>
    </>
  )
}

export default Children;