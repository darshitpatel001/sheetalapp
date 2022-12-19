import React, { useReducer, useState } from "react";

export default function Myreducer() {
    const Myreducer = (state, action) => {
        switch (action.type) {
          case "ADD":
            return [...state, action.payload];
    
          case "DELETE":
            const mydata = [...state];
            mydata.splice(action.payload, 1);
    
            return mydata;
    
          default:
    
            return state;
        }
      };
  const [data, setdata] = useState("");
  const [first, setfirst] = useReducer(Myreducer, []);

  

  const handler = (e) => {
    setdata(e.target.value);
  };

  const msubmit = () => {
    setfirst({ type: "ADD", payload: data });

  };

  const myDelete = (e) => {
    setfirst({ type: "DELETE", payload: e });
  };

  return (
    <div>
      <input type="text" value={data} onChange={handler} />
      <input type="button" value="Save" onClick={msubmit} />
      {first.map((val, index) => {
        return (
          <h3>{val}<input type="button" value="Delete" onClick={()=>{myDelete(index)}} />
          </h3>
        );
      })}
    </div>
  );
}
