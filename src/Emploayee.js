import React from "react";
import { useState } from "react";

export default function Emploayee() {
  const [emploayee, setemploayee] = useState({
    firstname: "",
    middalename: "",
    lastname: "",
    cityname: "",
  });

  const FirstnameHandler = (d) => {
    setemploayee({ ...emploayee, firstname: d.target.value });
  };

  const MiddalenameHandler = (d) => {
    setemploayee({ ...emploayee, middalename: d.target.value });
  };

  const LastnameHandler = (d) => {
    setemploayee({ ...emploayee, lastname: d.target.value });
  };

  const CitynameHandler = (d) => {
    setemploayee({ ...emploayee, cityname: d.target.value });
  };

  const DataSubmit = (e) => {
    e.preventDefault();
    console.log(emploayee);
  };

  return (
    <div>
      <form onSubmit={DataSubmit}>
        First Name :
        <input type="text" name="firstname" onChange={FirstnameHandler} />
        Middal Name :
        <input type="text" name="middalename" onChange={MiddalenameHandler} />
        Last Name :
        <input type="text" name="lastname" onChange={LastnameHandler} />
        City Name
        <input type="text" name="cityname" onChange={CitynameHandler} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
