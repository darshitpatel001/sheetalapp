import React, { useState } from 'react'

export default function Home() {
  const[data,setdata]  =useState(2)
  
  const Changevalue = () => {
    setdata(data*4)
  }
 
const [fname,setfname] =useState("Darshit");
const [mname,setmname] =useState("Rameshbhai");
const [lname,setlname] =useState("Akbari");
const [name,setname] =useState("");

const Fullname = () => {
    setname(fname["0"]+mname["0"]+lname)
}

  return (
    <div>
      <h3>Value : {name} </h3>
      <button onClick={Fullname}>Click</button>
    </div>
    
  )
}
 