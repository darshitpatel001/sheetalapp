import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";

export default function Apipost() {
  const [data, setdata] = useState({
    title:"",
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword:"",
    acceptTerms: "true"
  });
 
 

  const Handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const mySubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/accounts/register" ,data)
    .then((e)=>{
        console.log(e.data)
    })
  };
  return (
    
    <div class="container">
      <form  id="contact" onSubmit={mySubmit}>
      <h6> <label> Title :</label></h6>
        <input type="text" name="title" onChange={Handler} />
       <h6> <label> First Name :</label></h6>
        <input type="text" name="firstName" onChange={Handler} />
        <h6> <label> Last Name :</label></h6>
        <input type="text" name="lastName" onChange={Handler} />
        <h6> <label> Email :</label></h6>
        <input type="text" name="email" onChange={Handler} />
        <h6> <label> password :</label></h6>
        <input type="password" name="password"  onChange={Handler} />
        <h6> <label> Confirm Password :</label></h6>
        <input type="password" name="confirmPassword"  onChange={Handler} /><br/>
       
        <input className="button" type="submit" value="submit" />
        
      </form>
     
    </div>
  );
}

