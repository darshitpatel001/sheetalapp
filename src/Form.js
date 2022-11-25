import React from "react";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstname: "",
    middalename: "",
    lastname: "",
    mobileNumber: "",
    password: "",
    cityname: "",
    gender: "",
    hobbies: [],
  });

  const [validation,setvalidation]= useState({
    firstname: "",
    middalename: "",
    lastname: "",
    mobileNumber: "",
    password: "",
    cityname: "",
    
    
  })

  const Handler = (e) => {
    // setForm({...form ,[e.target.name]:[e.target.value]})
    if (e.target.name == "hobbies") {
      let data = form.hobbies;
      if (e.target.checked) {
        
        data.push(e.target.value);
        setForm({ ...form, hobbies: data });

      } 
      else {
        let Data1 = data.filter((value) => {
          return value != e.target.value;
        });

        setForm({ ...form, hobbies: Data1 });
      }
    } 
    else {

      if (e.target.value =="") {
        setvalidation({...validation, [e.target.name]:`${e.target.name} is required `})
      }
      else {
       setvalidation({ ...validation,[e.target.value]:""})
      }

      if (/^[A-Za-z]+$/.test(e.target.value)== false && e.target.name == "firstname"){
        setvalidation({...validation, firstname : "first name is invalid"})

      }

    

      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
  // const FirstnameHandler = (d) => {
  //     setForm({...form,firstname : d.target.value})
  // }

  // const MiddalenameHandler = (d) => {
  //     setForm({...form,middalename : d.target.value})
  // }

  // const LastnameHandler = (d) => {
  //     setForm({...form,lastname : d.target.value})
  // }

  // const MobilenumberHandler = (d) => {
  //     setForm({...form,mobileNumber : d.target.value})
  // }

  // const EmailHandler = (d) => {
  //     setForm({...form,email : d.target.value})
  // }

  // const PasswordHandler = (d) => {
  //     setForm({...form,password : d.target.value})
  // }

  // const CitynameHandler = (d) => {
  //     setForm({...form,cityname : d.target.value})
  // }

  const DataSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div class="container">
      <h3>Student Form</h3>
      <form onSubmit={DataSubmit} class="registartion-form">
        
<table>
        <label for="">First Name : </label>
       <input type="text" name="firstname" onChange={Handler} />
        <span>{validation.firstname}</span>
        <br/>
    
        <label for="">Middale : </label>
        <input type="text" name="middalename" onChange={Handler} />
        <span>{validation.middalename}</span>
        <br />

        <label for="">Last Name : </label>
        <input type="text" name="lastname" onChange={Handler} />
        <span>{validation.lastname}</span>
        <br />

        <label for="">Mobile Number: </label>
        <input type="text" name="mobileNumber" onChange={Handler} />
        <span>{validation.mobileNumber}</span>
        <br />

        <label for="">Email : </label>
        <input type="text" name="email" onChange={Handler} />
        <span>{validation.email}</span>
        <br />

        <label for="">Password : </label>
        <input type="password" name="password" onChange={Handler} />
        <span>{validation.password}</span>
        <br />

        <label for="">City Name  : </label>
        <input type="text" name="cityname" onChange={Handler} />
        <span>{validation.cityname}</span>
        <br />

        <label>Gender : Male </label>
        <input type="radio" name="gender" value="Male" onClick={Handler} />

        <label> Female </label>
        <input type="radio" name="gender" value="Female" onClick={Handler} />
        <br />

        <label>Hobbies : Music </label>
        <input type="checkbox" name="hobbies" value="music" onClick={Handler} />

        <label> Reading </label>
        <input type="checkbox" name="hobbies" value="Reading" onClick={Handler}/>

        <label> Cricket </label>
        <input type="checkbox" name="hobbies" value="Cricket" onClick={Handler}/>
        <br />

        <input className="submit" type="submit" value="Submit" />
        </table>
      </form>
    </div>
  );
}
