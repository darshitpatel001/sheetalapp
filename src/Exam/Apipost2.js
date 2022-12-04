import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Api2display from './Api2display';
export default function Apipost2() {
 
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((e)=>{
           setdata(e.data)
        })
       }, [])
  return (
    <div>
{
    data.map((d)=>{
        return(
        <div class="col-3"><Api2display post={d.url}></Api2display></div>)
    })

}
    </div>
  )
}
