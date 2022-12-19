import { React, useContext } from "react";
import MyChild3 from "./MyChild3";
import Languge from "./CreateContext";

export default function () {
  const { Lan } = useContext(Languge);

  const mydata = {
    "en": {
      firstName: "FirstName :",
      lastName: "lastName :",
    },

    "guj": {
      firstName: "પ્રથમ નામ :",
      lastName: "છેલ્લું નામ :",
    }
  };

  return (
    <div>
      <form>
        <label>{mydata[Lan].firstName}</label>
        <input type="text" /><br/><br/>

        <label>{mydata[Lan].lastName}</label>
        <input type="text" />
      </form>
      <MyChild3 />
    </div>
  );
}
