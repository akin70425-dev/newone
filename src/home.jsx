import React from 'react'
import "./home.css"
import { useState,useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom'


function Home() {

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
         setmovies(data.movies);
         setscifi_movies(data.movie2);
         sethorror_movies(data.movie3);
         setcomady_movies(data.movie4);
       });
   }, []);
let hero=[
    {"id":1,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/22458.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(71, 23, 23, 1))","h1":"F-1","p1":"A fallen legend returns to the track as the world’s fastest sport demands one last shot at glory.","p2":"Amid roaring engines, fierce rivalries, and relentless pressure, he teams up with a rising talent,","p3":"where speed is everything—and redemption lies just one race away.","video":"MabUPLaLz6w" },
    {"id":2,"img":"https://wallpapercave.com/wp/wp15870081.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(11, 59, 81, 1))","h1":"Saiyaara","p1":"A chance encounter sparks an unforgettable love as two souls from different worlds collide.","p2":"Bound by music, dreams, and unspoken emotions, they navigate heartbreak, hope, and destiny,","p3":"where love becomes their strength—and their greatest test against the unknown.","video":"GagxSlo253M"},
    {"id":3,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/7773.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(60, 9, 9, 1))","h1":"KGF-2","p1":"A ruthless empire rises from blood and fire as one man dares to challenge destiny.","p2":"In a world ruled by power, gold, and fear, he faces deadly enemies and impossible odds,","p3":"where ambition becomes his weapon and his name turns into a legend no one can ignore.","video":"tLeTx5OdjZs"},
    {"id":4,"img":"https://4kwallpapers.com/images/walls/thumbs_3t/24522.jpg","bg":"linear-gradient(rgba(0,0, 0, 0.1),rgba(60, 9, 9, 1))","h1":"Stranger Things","p1":"A quiet town hides a gateway to something far more sinister than anyone could imagine.","p2":"When a young boy vanishes, a group of friends uncover secret experiments, strange powers, and a terrifying parallel world,","p3":"where courage and friendship become their only hope against the darkness closing in.","video":"e4XvO7DItmc"},
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
    <div className='ab'> 
        <div className={active==true?"active":"black"}>
       {watchmovie&&  <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${watchmovie.video}?rel=0`}
      title="YouTube trailer"
      allow=" encrypted-media"
    ></iframe>}
    </div>
     <div className=" home-hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgb(0,0,0)), url(${randomhero.img})`}}>
    <div className="container">

        
    

<div className="row pb-5 pt-4 menu align-items-center ">

  <div className=" col-sm-12 col-md-12 col-lg-2 d-flex justify-content-between">
    <h2 className="logo">NETFLIX</h2>
    <button className="btn btn-light d-lg-none mb-3" onClick={toggleMenu}>
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

        <div className={`row  hero-con ${open?"open":"notopen"} `} >
            <div className="col-12">
                
                <h1>{randomhero.h1}</h1>
                <p>{randomhero.p1} <br /> {randomhero.p2} <br />{randomhero.p3}</p>
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
        
       <div className="critical-roll pb-5">
{
randommovies.slice(0,20).map((data)=>{

return(
<div className="critical-image" key={data.id}>
<img src={data.image} role="button" className="img-fluid" alt=""
onClick={()=>handleactive(data.id)}
/>
</div>
)

})
}
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Scifi Movies</h3>
            </div>
        </div>
        
        <div className=" pb-5  critical-roll">
            {
                randomscifi_movies.slice(0,20).map((data)=>{
                 return <div className="critical-image" key={data.id}>
      <img src={data.image} className="img-fluid" alt="" onClick={()=>{handleactivescifi(data.id)}}/>
    </div>} )
            }
</div>

<div className="row pb-3">
            <div className="col-12">
                <h3>Horror Movies</h3>
            </div>
        </div>
        <div className=" pb-5 critical-roll">
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
        <div className="pb-5 critical-roll">
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
            <div className="col-lg-3 col-md-6 col-sm-12 "><p role='button'>Help Center<br/>
            Jobs<br/>
            Cookie Preferences<br />
            Legal Notices
            </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12"><p role='button'>Account<br/>
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
    
   </div>
    </>
  )
}

export default Home;