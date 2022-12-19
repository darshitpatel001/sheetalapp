import React, { useContext } from "react";
import Languge from "./CreateContext";

export default function Header() {
  const { Lan, setLan } = useContext(Languge);

  const myhadler = (e) => {
    setLan(e.target.value);
  };
  return (
    <div>
      <select onChange={myhadler}>
        <option value="en">English</option>
        <option value="guj">Gujrati</option>
      </select>
    </div>
  );
}
