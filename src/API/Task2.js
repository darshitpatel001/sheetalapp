import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

export default function Task2() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json")
      .then((y) => y.json())
      .then((y) => {
        setdata(y);
      });
  }, []);


  return (
    <div>
      <table>
        {data.map((ele) => {
          return (
            <tr>
              <td>{ele.disclosure_year}</td>
              <td>{ele.disclosure_date}</td>
              <td>{ele.transaction_date}</td>
              <td>{ele.owner}</td>
              <td>{ele.ticker}</td>
              <td>{ele.asset_description}</td>
              <td>{ele.type}</td>
              <td>{ele.amount}</td>
              <td>{ele.representative}</td>
              <td>{ele.district}</td>
              <td>{ele.ptr_link}</td>
              <td>{ele.cap_gains_over_200_usd}</td>
            </tr>
          );
        })}
      </table>

    </div>
  )
}
