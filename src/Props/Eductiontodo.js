import React from "react";
import Educationinfo from "./Educationinfo"
import "./Educatio.css";
import { useState } from "react";

export default function Eductiontodo() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
  });

  const [first, setfirst] = useState([]);
  const [index, setindex] = useState(-1);

  const Handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const edit = (index) => {
    let myobj = first[index];
    setdata(myobj);
    setindex(index);
  };
  
  const mydelete = (index) => {
    const myArray = [...first];
    myArray.splice(index,1);

    setfirst(myArray);
  }
  const mySubmit = (e) => {
    e.preventDefault();
    if (index >=0)
    {
      let a = [...first];
      a[index].firstname = data.firstname;
      a[index].lastname = data.lastname;

      setfirst(a);
    }
else
{
    let dd = [...first];
    dd.push(data);
    setfirst(dd);
    setindex(index);
}

  };
  return (
    <div class="container">
      <form  id="contact" onSubmit={mySubmit}>
       <h6> <label> First Name :</label></h6>
        <input type="text" name="firstname" value={data.firstname}  onChange={Handler} />
        <h6> <label> Last Name :</label></h6>
        <input type="text" name="lastname" value={data.lastname} onChange={Handler} />

        
        <Educationinfo data={first} editmy={edit} remove={mydelete}></Educationinfo>
        <input className="button" type="submit" value="submit" />
        
      </form>
    </div>
  );
}
