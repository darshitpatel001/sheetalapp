import React, { useState } from 'react'

export default function Magic() {

    const [magic,setmagic] =useState('')
    const [data,setdata] =useState()

    const Final = magic.split("").reverse("").join("")

    const Handler = (e) => {
        setmagic(e.target.value)
    }
    const Open = () => {
     if (Final == magic ) {
        setdata("Okkk")
     } 
     else {
        setdata("Not Ok")
     }
    }
    
  return (
    <>
    <h1>{data}</h1>
    <input type="text" onChange={Handler} value={magic}/>
    <button onClick={Open}>Click</button>
    </>
  )
}
