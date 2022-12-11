import React from 'react'
import { useState } from "react";
import TextField from "@mui/material/TextField";
import './UiForm.css'

export default function UiForm() {
    const [data, setdata] = useState({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        password:"",
        city: "",
      });
      const Handler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
      };
      
      return (
        <div class="w-50 mx-auto">
          <form onSubmit={handleSubmit}>
             <h2>Registation Form</h2>
            <TextField
              label="First Name"
              variant="standard"
              name="fname"
              onChange={Handler}
            />
            <br />
            <TextField
              label="Middle Name"
              variant="standard"
              name="mname"
              onChange={Handler}
            />
            <br />
            <TextField
              label="Last Name"
              variant="standard"
              name="lname"
              onChange={Handler}
            />
            <br />
            <TextField
              label="Password"
              variant="standard"
               type="password"
               autoComplete="current-password"
              name="password"
              onChange={Handler}
            /><br/>

            <TextField
              id="outlined-select-currency-native"
              variant="standard"
              select
              label="select"
              SelectProps={{
                native: true,
              }}
              name="city"
              onChange={Handler}
              helperText="Please select your currency"
            >
                <option></option>
              <option>Surat</option>
              <option>Vadodara</option>
              <option>Bhavnagr</option>
              <option>Rajkot</option>
            </TextField>
            <br />
            <input
              class="form-control btn btn-outline-primary"
              type="submit"
              value="Save"
            />
          </form>
        </div>
      );
    }