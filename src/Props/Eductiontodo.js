import React from "react";
import Educationinfo from "./Educationinfo"
import "./Educatio.css";
import { useState } from "react";

export default function Eductiontodo() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    Email: "",
    Mobile:"",
    City:"",
  });

  const [first, setfirst] = useState([]);
  const [index, setindex] = useState(-1);
  const [search, setsearch] = useState("");

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

  const myserch = (e) => {
    setsearch(e.target.value);
  }
  const mySubmit = (e) => {
    e.preventDefault();
    if (index >=0)
    {
      let a = [...first];
      a[index].firstname = data.firstname;
      a[index].lastname = data.lastname;
      a[index].Email = data.Email;
      a[index].Mobile = data.Mobile;
      a[index].City = data.City;

      setfirst(a);
    }
else
{
    let dd = [...first];
    dd.push(data);
    setfirst(dd);

}

  };
  return (
    
    <div class="container">
      <form  id="contact" onSubmit={mySubmit}>
       <h6> <label> First Name :</label></h6>
        <input type="text" name="firstname" value={data.firstname}  onChange={Handler} />
        <h6> <label> Last Name :</label></h6>
        <input type="text" name="lastname" value={data.lastname} onChange={Handler} />
        <h6> <label> Email :</label></h6>
        <input type="text" name="Email" value={data.Email} onChange={Handler} />
        <h6> <label> Mobile :</label></h6>
        <input type="text" name="Mobile" value={data.Mobile} onChange={Handler} />
        <h6> <label> City :</label></h6>
        <input type="text" name="City" value={data.City} onChange={Handler} />
       
       <input type="text" onChange={myserch} value={search}/>
        <input className="button" type="submit" value="submit" />
        
      </form>
      <Educationinfo data={first} editmy={edit} remove={mydelete} find={search}></Educationinfo>
    </div>
  
    
  );
}
