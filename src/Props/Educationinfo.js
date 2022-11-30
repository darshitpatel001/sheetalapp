import React from "react";

export default function Educationinfo(props) {
  return (
    <div>
      {props.data.map((value, index) => {
        return (
          <div>
            <h4>{value.firstname} {value.lastname}<button onClick={() => {props.editmy(index);}}>Edit </button>
              <button onClick={() => {props.remove(index);}}>Remove</button>
            </h4>
          </div>
        );
      })}
    </div>
  );
}
