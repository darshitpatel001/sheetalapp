import React from 'react'
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; 

import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 

export default function MyGrid2() {
    const [row, setrow] = useState();

    const [colum, setColum] = useState([
      { field: "albumId" ,  filter: 'agNumberColumnFilter'},
      { field: "title",filter: true,sortable: true },
      { field: "url" },
      { field: "thumbnailUrl" },
    ]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((y) => y.json())
        .then((y) => {
          setrow(y);
        });
    }, []);
  
    return (
      <div className="ag-theme-alpine" style={{ width: 1400, height: 650 }}>
        <AgGridReact rowData={row} columnDefs={colum}></AgGridReact>
      </div>
    );
  }

  