import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Fatchapi() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((y) => y.json())
      .then((y) => {
        
        setdata(y);
      });
  }, []);
  return (
    <div>
      <table>
        {data.map((element) => {
          return (
            <tr>
              {" "}
              <td> {element.id}</td>
              <td> {element.title}</td> <td> {element.price}</td>
              <td> {element.description}</td>
              <td>
                <img src={element.image} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

