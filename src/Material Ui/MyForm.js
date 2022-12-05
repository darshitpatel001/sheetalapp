import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function MyForm() {
  const [data, setdata] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    city: "",
  });

  const Handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div class="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
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
          label="lname"
          variant="standard"
          name="lname"
          onChange={Handler}
        />
        <br />
        <TextField
          label="email"
          variant="standard"
          name="email"
          onChange={Handler}
        />
        <br />
        <br />

        <TextField
          id="outlined-select-currency-native"
          select
          label="select"
          SelectProps={{
            native: true,
          }}
          name="city"
          onChange={Handler}
          helperText="Please select your currency"
        >
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
