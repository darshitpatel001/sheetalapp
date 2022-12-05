import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Apiprect1disply from './Apiprect1disply';

export default function ApiPrecti1() {
    const [data, setdata] = useState([]);

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((y) => {
        setdata(y.data)
    })
}, [])

  return (
    <div>
{
    data.map((ele) => {
        return(<div><Apiprect1disply disp={ele} ></Apiprect1disply></div>)
    })
}
    </div>
  )
}
