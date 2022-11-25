import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Task3() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((y) => {
        setdata(y.data.data);
      });
  }, []);

  return (
    <div>
      <table>
        {data.map((xy) => {
          return (
            <tr>
              <td>{xy["ID Nation"]}</td>
              <td>{xy.Nation}</td>
              <td>{xy["ID Year"]}</td>
              <td>{xy.Year}</td>
              <td>{xy.Population}</td>
              <td>{xy["Slug Nation"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
