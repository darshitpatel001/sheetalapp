import React, { useState } from "react";
import { useEffect } from "react";

export default function Fatch() {
  const [data, setdata] = useState([]);
  const [first, setfirst] = useState("");

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((y) => y.json())
      .then((y) => {
        setdata(y);
      });
  }, []);

  const Handler = (e) => {
    setfirst(e.target.value);
  };


  const Assending = () => {
    let mydata1 = [...data];
    mydata1.sort(function(a,b) {
        if(a.id > b.id)
        return 1;
        else
        return -1;   
      })
      setdata(mydata1)
}
const Desending = () => {
    let mydata1 = [...data]; 
    mydata1.sort(function(a,b) {
        if(a.id > b.id)
        return -1
        else
        return 1;
      })       
      setdata(mydata1)
}

  return (
    <div>
      <input type="text" onChange={Handler} value={first}/>
      <table>
        {data.filter((value, index) => {
            return (value.email.toUpperCase().indexOf(first.toUpperCase()) >= 0);})
          .map((element) => {
            return (
              <tr>
                
                <td> {element.id}</td>
                <td> {element.name}</td> <td> {element.email}</td>
              </tr>
            );
          })}
      </table>
      <button onClick={Assending}>Assending</button>
          <button onClick={Desending}>Desending</button>
    </div>
  );
}
