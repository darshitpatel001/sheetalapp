import React from 'react'
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";


export default function Task4() {
    const [Data, setdata] = useState([]);

    useEffect(() => {
        axios
          .get("https://api.fda.gov/food/enforcement.json?limit=10")
          .then((y) => {
            setdata(y.data.results);
          });
      }, []);

  return (
    <div>
         <table>
        {Data.map((ele) => {
          return (
            <tr>
              <td>{ele.country}</td>
              <td>{ele.city}</td>
              <td>{ele.address_1}</td>
              <td>{ele.reason_for_recall}</td>
              <td>{ele.product_quantity}</td>
              <td>{ele.code_info}</td>
              <td>{ele.distribution_pattern}</td>
              <td>{ele.state}</td>
              <td>{ele.product_description}</td>
            </tr>
          );
        })}
      </table>


    </div>
  )
}
