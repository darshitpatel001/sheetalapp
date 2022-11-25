import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function Formdegree() {
  const [data, setData] = useState({
    name: "",
    Degree: "",
    collage: "",
  });

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
    console.log(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name  : <input type="Text" name="name" onChange={Handler} />

        <Select
          options={Collage}
          onChange={(e) => {
            Handler({ target: { name: "collage", value: e.value } });
          }}
          name="collage"
        />
        <Select
          options={Degree}
          onChange={(e) => {
            Handler({ target: { name: "Degree", value: e.value } });
          }}
          name="Degree"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
