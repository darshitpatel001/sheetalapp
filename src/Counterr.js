import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Increment, Decrement, Multiplaction } from "./Reactredux/Action/Action";

export default function Counterr() {
  const data = useSelector((d) => d);

  const mydisp = useDispatch();

  const increment = () => {
    mydisp(Increment());
  };

  const decrement = () => {
    mydisp(Decrement());
  };

  const multiplaction = () => {
    mydisp(Multiplaction());
  };

  return (
    <div>
      {data}<br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiplaction}>Multiplaction</button>
    </div>
  );
}
