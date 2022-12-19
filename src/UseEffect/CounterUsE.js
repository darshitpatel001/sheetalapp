import React from "react";
import { useState, useEffect } from "react";
import UseEfflimtLeval2 from "./UseEfflimtLeval2";

export default function CounterUsE () {
  const [first, setfirst] = useState("2");
  const [data, setdata] = useState("2");

  const mydd = (e) => {
    setfirst(e.target.value);
  };
  const save = (e) => {
    setdata(first);
  };

  return (
    <div>
      <input type="text" value={first} onChange={mydd} />
      <button onClick={save}>Savee</button>
     <h3>{data}</h3>
      <UseEfflimtLeval2 pageid={data} />
    </div>
  );
}