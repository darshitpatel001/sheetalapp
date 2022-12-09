import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Increment, Decrement } from "./Reactredux/Action/Action";

export default function Counterr() {
  const data = useSelector((d) => d);

  const mydisp = useDispatch();

  const increment = () => {
    mydisp(Increment());
  };

  const decrement = () => {
    mydisp(Decrement());
  };

  return (
    <div>
      {data}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
