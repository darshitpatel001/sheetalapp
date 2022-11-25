import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Task5() {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios
      .get("https://date.nager.at/api/v2/publicholidays/2020/US")
      .then((y) => {
        setfirst(y.data);
      });
  }, []);

  return (
    <div>
      <table>
        {first.map((z) => {
          return (
            <tr>
              <td>{z.date}</td>
              <td>{z.localName}</td>
              <td>{z.name}</td>
              <td>{z.countryCode}</td>
              <td>{z.fixed}</td>
              <td>{z.global}</td>
              <td>{z.counties}</td>
              <td>{z.launchYear}</td>
              <td>{z.type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
