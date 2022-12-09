import React from 'react'
import { useStore , useDispatch } from 'react-redux/es/exports'
import { Increment ,Decrement } from './Reactredux/Action/Action'

export default function Counterr() {
    const data = useStore(store)

   const mydisp = useDispatch()

   const increment = () => {
    mydisp(Increment)
   }

   const decrement = () => {
    mydisp(Decrement)
   }

  return (
    <div>
        {data}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
