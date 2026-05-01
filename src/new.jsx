import React from 'react'
import "./new.css"
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function New() {

    let [movies,setmovies]=useState([]);
    let [scifi_movies,setscifi_movies]=useState([]);
    let [horror_movies,sethorror_movies]=useState([]);
    let [comady_movies,setcomady_movies]=useState([]);
    let [active,setactive]=useState(false);
    let [watchmovie,setwatchmovie]=useState(null);
    let [randomhero,setrandomhero]=useState([]);
    let [randommovies,setrandommovies]=useState([]);
    let [randomscifi_movies,setrandomscifi_movies]=useState([]);
    let [randomhorror_movies,setrandomhorror_movies]=useState([]);   
    let [randomcomady_movies,setrandomcomady_movies]=useState([]); 
    let nav=useNavigate();
    
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
    {"id":1,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/24252.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(12, 21, 46, 1))","video":"ns8weNznn1Y","h1":"The Family Plan 2","p1":"A former assassin is forced back into action when his past resurfaces once again.","p2":"Amid dangerous enemies and a life he tried to leave behind,","p3":"where love becomes his strength—and survival means facing the truth."},
    {"id":2,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/24162.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(40, 22, 6, 1))","video":"-E3lMRx7HRQ","h1":"Now You See Me","p1":"A group of illusionists returns with tricks more daring and dangerous than ever before.","p2":"Amid high-stakes heists and mind-bending deception, they outplay powerful enemies,","p3":"where nothing is as it seems—and every move hides a greater illusion."},
    {"id":3,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/10731.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(9, 19, 30, 1))","video":"VwErvYgoH70","h1":"Harry Potter ","p1":"AA young wizard returns to a world growing darker as a dangerous prisoner escapes.","p2":"Amid hidden truths and haunting secrets, he uncovers a past that changes everything,","p3":"where fear turns into courage—and destiny begins to take shape."},
    {"id":4,"img":"https://wallpapercave.com/wp/wp9910.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(46, 31, 0, 1))","video":"IPf4rGw3XHw","h1":"Pirates of the Caribbean","p1":"A rogue captain sails the seas in search of freedom, treasure, and lost legends.","p2":"Amid cursed gold, deadly pirates, and supernatural forces, chaos rules the ocean,","p3":"where loyalty is rare—and every voyage hides a new danger."},
]
useEffect(()=>{
setrandommovies([...movies].sort(()=>Math.random()-0.5));
},[movies]);

useEffect(()=>{
setrandomscifi_movies([...scifi_movies].sort(()=>Math.random()-0.5));
},[scifi_movies]);

useEffect(()=>{
setrandomhorror_movies([...horror_movies].sort(()=>Math.random()-0.5));
},[horror_movies]);

useEffect(()=>{
setrandomcomady_movies([...comady_movies].sort(()=>Math.random()-0.5));
},[comady_movies]);

useEffect(() => {
  setrandomhero(hero[Math.floor(Math.random() * hero.length)]);
}, []);

function handleactive(id){
    setactive(true);
  let movie= randommovies.find((data)=>{
        return data.id===id;
    })
    setwatchmovie(movie);
     window.history.pushState({ videoOpen: true }, "");
};

function handleactivehorror(id){
    setactive(true);
  let movie= randomhorror_movies.find((data)=>{
        return data.id===id;
    })
    setwatchmovie(movie);
     window.history.pushState({ videoOpen: true }, "");
};
function handleactivescifi(id){
    setactive(true);
  let movie= randomscifi_movies.find((data)=>{
        return data.id===id;
    })
    setwatchmovie(movie);
     window.history.pushState({ videoOpen: true }, "");
};
function handleactivecomady(id){
    setactive(true);
  let movie= randomcomady_movies.find((data)=>{
        return data.id===id;
    })
    setwatchmovie(movie);
     window.history.pushState({ videoOpen: true }, "");
};
function handleclose(){
    setactive(false);
    setwatchmovie(null);
}
function handleheroplay(){
    setactive(true);
    setwatchmovie(randomhero);
    window.history.pushState({ videoOpen: true }, "");
}
const [open,setOpen] = useState(false)

function toggleMenu(){
  setOpen(!open)
}

useEffect(() => {
    const handleBack = (e) => {
        if (active) {
            handleclose(); 
        }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
        window.removeEventListener("popstate", handleBack);
    };
}, [active]);

    
  return (
    <>
      <div className={active==true?"active":"black"}>
       {watchmovie&&  <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${watchmovie.video}?rel=0`}
      title="YouTube trailer"
      allow=" encrypted-media"
      allowFullScreen
    ></iframe>}
    </div>

     <div className="children-hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgb(0,0,0)), url(${randomhero.img})`}}>
    <div className="container">

        <div className="row pb-5 pt-4 menu align-items-center">
                    <div className=" col-sm-12 col-md-12 col-lg-2 d-flex justify-content-between">
                       <h2 className="logo">NETFLIX</h2>
                       <button className="btn btn-light d-lg-none mb-3 toggle" onClick={toggleMenu}>
                     ☰
                   </button>
                     </div>
                     <div className={`col-12 col-lg-8 ${open ? "d-block" : "d-none"} d-lg-flex`}>
                       <p className="me-3"><Link to="/home" className="tvshows-links">Home</Link></p>
                       <p className="me-3"><Link to="/tvshows" className="tvshows-links">Tv Shows</Link></p>
                       <p className="me-3"><Link to="/movies" className="tvshows-links">Movies</Link></p>
                       <p className="me-3"><Link to="/new" className="tvshows-links">New & Popular</Link></p>
                     </div>
                   
                     <div className={`col-12 col-lg-2 ${open ? "d-block" : "d-none"} d-lg-flex justify-content-lg-end`}>
                       <p className="me-3"><Link to="/children" className="tvshows-links">Children</Link></p>
                       <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" className="me-3 avatar" alt="avatar" onClick={() => nav("/accounts")} width={30} height={25}/>
                     </div>
               </div>
         <div className={`row  hero-con ${open?"open":"notopen"}`}>
            <div className="col-12">
                
                <h1>{randomhero.h1}</h1>
                <p> {randomhero.p1} <br /> {randomhero.p2} <br /> {randomhero.p3} </p>
            </div>
        </div>
        <div className="row hero-cons pb-5">
            <div className="col-12">
                <button onClick={()=>{handleheroplay()}}>Play</button>
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
        
        <div className="pb-5  critical-roll">
            {
                randommovies.slice(0,20).map((data)=>{
                return <div className=" critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" onClick={()=>{handleactive(data.id)}}/>
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Scifi Movies</h3>
            </div>
        </div>
        
        <div className="pb-5  critical-roll">
            {
                randomscifi_movies.slice(0,20).map((data)=>{
                 return <div className=" critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" onClick={()=>{handleactivescifi(data.id)}}/>
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Horror Movies</h3>
            </div>
        </div>
        <div className="pb-5 critical-roll">
            {
                randomhorror_movies.slice(0,20).map((data)=>{
                 return <div className=" critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" onClick={()=>{handleactivehorror(data.id)}}/>
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Comady Movies</h3>
            </div>
        </div>
        <div className=" pb-5  critical-roll">
            {
                randomcomady_movies.slice(0,20).map((data)=>{
                 return <div className=" critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" onClick={()=>{handleactivecomady(data.id)}}/>
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
            <div className="col-lg-3 col-md-6 col-sm-12 "><p role='button'>FAQ<br/>
            Investers Relations<br/>
            Privacy <br />
            Speed Test
            </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12"><p role='button'>Help Center<br/>
            Jobs<br/>
            Cookie Preferences<br />
            Legal Notices
            </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 "><p role='button'>Account<br/>
            Ways to Watch<br/>
            Corparate Information<br />
            Only on Netflix
            </p></div>
            <div className="col-lg-3 col-md-6 col-sm-12 "><p role='button'>Media Center<br/>
            Trems of Use<br/>
            Privacy <br />
            Contact Us
            </p></div>
            </div>
            </div>
        <p className='copyright'>Netflix India</p>
        <footer className='pt-2 copyright'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </footer>
        </div>
    </div>
    </>
  )
}

export default New;
