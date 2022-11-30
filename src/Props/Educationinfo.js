import React from "react";

export default function Educationinfo(props) {
  return (
    <div>
      {props.data.map((value,index) => {
        return (
          <div>{value.firstname}{value.lastname}<button onClick={() => {props.editmy(index);}}>Click</button>
          </div>
        );
      })}
    </div>
  );
}
