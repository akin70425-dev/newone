import React from 'react'
import "./criticaltv.css"
import { useState,useEffect } from 'react';

function Criticaltv() {

    let [movies,setmovies]=useState([]);
    let [scifi_movies,setscifi_movies]=useState([]);
    let [horror_movies,sethorror_movies]=useState([]);
    let [comady_movies,setcomady_movies]=useState([]);
    

    useEffect(()=>{
        fetch("http://localhost:4000/movies",{method:"Get"})
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            return setmovies(data)
        })
    },[]
    );
    useEffect(()=>{
        fetch("http://localhost:4000/movie2",{method:"Get"})
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            return setscifi_movies(data)
        })
    },[]
    );
     useEffect(()=>{
        fetch("http://localhost:4000/movie3",{method:"Get"})
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            return sethorror_movies(data)
        })
    },[]
    ),
    useEffect(()=>{
        fetch("http://localhost:4000/movie4",{method:"Get"})
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            return setcomady_movies(data)
        })
    },[]
    )


let randommovies=[...movies].sort(()=>Math.random()-0.5);
let randomscifi_movies=[...scifi_movies].sort(()=>Math.random()-0.5);
let randomhorror_movies=[...horror_movies].sort(()=>Math.random()-0.5);
let randomcomady_movies=[...comady_movies].sort(()=>Math.random()-0.5);

    
  return (
    <>
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
    </>
  )
}

export default Criticaltv