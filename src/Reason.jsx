import React, { useState } from 'react'
import { FaTv } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoFlashlightOutline } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";

function Reason() {
    let[data,setdata]=useState([
        {
            id:1,heading:"Enjoy on your Tv",
            detail:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            icon:<FaTv />
        },
        {
            id:2,heading:"Download your shows to watch offline",
            detail:"Save your favourites easily and always have something to watch.",
            icon:<FaArrowCircleDown />

        },
        {
            id:3,heading:"Watch everywhere",
            detail:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
            icon:<IoFlashlightOutline />

        },
        {
            id:4,heading:"Create profiles for kids",
            detail:"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
            icon:<LuScanFace />

        },
    ])
  return (
    <div className='container py-5'>
    <div className="row ">
        <div className='col-12'>
            <h1 className='pb-3 join'>More reasons to join</h1>
            </div>
            <div className="row gy-3 card-div">
                {data.map((data)=>
                {
                    return <div className=" col-2 cards" key={data.id}>
                        <h2>{data.heading}</h2>
                        <p>{data.detail}</p>
                        <i>{data.icon}</i>
                    </div>
                })}
            </div>
            </div>
        </div>
  )
}

export default Reason;