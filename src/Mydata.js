import React, { useState } from 'react'
import reviews from './data'

export default function Mydata() {
    const [data,setdata] =useState ();
    
    const Handler = (e) => {
        setdata(e.target.value)
    }

    const Down = () => {
    }

  return (
    <>
    <input type='text' onChange={Handler}/>
    <button onClick={Down}>Click</button>
    <div>
        {reviews.filter((value,index)=> {
        return  (value.name.indexOf(data) >=0)
         } )
         .map((value,index,array)=>{
        return<div>{value.name}</div>
       
    })}</div>
    </>
  )
}
