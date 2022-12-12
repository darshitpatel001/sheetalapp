import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./UiForm.css";

export default function UiForm() {
  onsubmit = (e) => {
    {
      axios.post("http://localhost:4000/accounts/authenticate", e).then((y) => {
        console.log(y.data);
        localStorage.setItem("Registation", JSON.stringify(y.data));
      });
    }
  };

  const [data, setdata] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    city: "",
  });
  const displayData = () => {
    let data = localStorage.getItem("Registation");
    let d = JSON.parse(data);

    axios
      .get("http://localhost:4000/account", {
        headers: {
          Authorization: "Bearer " + d?.jwtToken,
        },
      })
      .then((y) => {
        console.log(y.data);
      })
      .catch((y) => {
        console.log(y);
      });
  };
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
          label="email"
          variant="standard"
          name="email"
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
        />
        <br />

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
          onClick={displayData}
        />
      </form>
    </div>
  );
}
// import React from "react";
// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import axios from "axios";
// import "./UiForm.css";
// import { Formik, Form } from "formik";

// export default function UiForm() {
//   const displayData = () => {
//     let data = localStorage.getItem("Registation");
//     let d = JSON.parse(data);

//     axios
//       .get("http://localhost:4000/account", {
//         headers: {
//           Authorization: "Bearer " + d?.jwtToken,
//         },
//       })
//       .then((y) => {
//         console.log(y.data);
//       })
//       .catch((y) => {
//         console.log(y);
//       });
//   };

//   return (
//     <div class="w-50 mx-auto">
//       <Formik
//         initialValues={{
//           fname: "",
//           mname: "",
//           lname: "",
//           email: "",
//           password: "",
//           city: "",
//         }}
//         onSubmit={(e) => {
//           axios
//             .post("http://localhost:4000/accounts/authenticate", e)
//             .then((y) => {
//               console.log(y.data);
//               localStorage.setItem("Registation", JSON.stringify(y.data));
//             });
//         }}
//       >
//         <Form>
//           <h2>Registation Form</h2>
//           <TextField
//             label="First Name"
//             variant="standard"
//             name="fname" />
//           <br />
//           <TextField
//             label="Middle Name"
//             variant="standard"
//             name="mname" />
//           <br />
//           <TextField
//             label="Last Name"
//             variant="standard"
//             name="lname" />
//           <br />
//           <TextField
//             label="email"
//             variant="standard"
//             name="email" />
//           <br />
//           <TextField
//             label="Password"
//             variant="standard"
//             type="password"
//             autoComplete="current-password"
//             name="password"
//           />
//           <br />

//           <TextField
//             id="outlined-select-currency-native"
//             variant="standard"
//             select
//             label="select"
//             SelectProps={{
//               native: true,
//             }}
//             name="city"
//             helperText="Please select your currency"
//           >
//             <option></option>
//             <option>Surat</option>
//             <option>Vadodara</option>
//             <option>Bhavnagr</option>
//             <option>Rajkot</option>
//           </TextField>
//           <br />
//           <input
//             class="form-control btn btn-outline-primary"
//             type="submit"
//             value="Save"
//             onClick={displayData}
//           />
//         </Form>
//       </Formik>
//     </div>
//   );
// }
