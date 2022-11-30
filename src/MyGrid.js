import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSSy

export default function MyGrid() {
  const [row, setrow] = useState();

  const [colum, setColum] = useState([
    { field: "postId", filter: true },
    { field: "name" ,filter: true,sortable: true},
    { field: "email" },
    { field: "body" },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((y) => y.json())
      .then((y) => {
        setrow(y);
      });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
      <AgGridReact rowData={row} columnDefs={colum}></AgGridReact>
    </div>
  );
}
