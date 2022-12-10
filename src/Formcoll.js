import React from "react";
import Select from "react-select";
import "./Formcoll.css";
import { useState } from "react";

export default function Formcoll() {
  const [data, setData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    degree: "",
    college: "",
    startdate: "",
    enddate: "",
    hobbies: "",
  });

  const [Isdisebal, setIsdisebal] = useState(false);

  const Name = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
  ];

  const Degree = [
    { value: "BCOM", label: "BCOM" },
    { value: "MCA", label: "MCA" },
    { value: "LLB", label: "LLB" },
    { value: "IIT", label: "IIT" },
  ];

  const Collage = [
    { value: "MSU", label: "MSU" },
    { value: "PARUL", label: "PARUL" },
    { value: "DHARUKA", label: "DHARUKA" },
    { value: "RK", label: "RK" },
  ];

  const Handler = (e) => {
    if (e.target.type == 'checkbox'){
      if(e.target.checked){
        setIsdisebal(true)
        setData({...data,"enddate":""})
      }
      else
    {
      setIsdisebal(false)
    }

    }
    else
    {
    setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Title : </label>
        <Select
          onChange={(e) => {
            Handler({ target: { name: "title", value: e.value } });
          }}
          name="title"
          options={Name}
        />
        <label htmlFor=""> Name : </label>
        <br />
        <input
          type="text"
          name="firstname"
          className="iid"
          placeholder="First Name"
          onChange={Handler}
        />
        <input
          type="text"
          name="lastname"
          className="iid"
          placeholder="Last Name"
          onChange={Handler}
        />
        <br />
        <label htmlFor=""> Education : </label>
        <Select
          onChange={(e) => {
            Handler({ target: { name: "degree", value: e.value } });
          }}
          name="degree"
          options={Degree}
        />
        <label htmlFor=""> University : </label>
        <Select
          onChange={(e) => {
            Handler({ target: { name: "college", value: e.value } });
          }}
          name="college"
          options={Collage}
        />
        <label> Date : </label><br/>
        <input className="iid" type="date"  name="startdate" onChange={Handler} />
        <input className="iid" type="date" name="enddate" onChange={Handler}  disabled={Isdisebal} value={data.enddate}/> <br />

        <input  type="checkbox" name="hobbies"  onClick={Handler} />
        <label>already Running </label>

        <br />
        
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
}
