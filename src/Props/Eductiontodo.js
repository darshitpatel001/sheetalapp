import React from "react";
import Educationinfo from "./Educationinfo"
import { useState } from "react";

export default function Eductiontodo() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
  });

  const [first, setfirst] = useState([]);

  const Handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const edit = (index) => {
    let myobj = first[index];
    setfirst(myobj);

  };

  const mySubmit = (e) => {
    e.preventDefault();
    let dd = [...first];
    dd.push(data);
    setfirst(dd);

  };
  return (
    <div>
      <form onSubmit={mySubmit}>
        <label> FirstName : </label>
        <input type="text" name="firstname"  onChange={Handler} />
        <input type="text" name="lastname" onChange={Handler} />
    
        <input type="submit" value="submit" />
        <Educationinfo data={first} editmy={edit}></Educationinfo>
      </form>
    </div>
  );
}
