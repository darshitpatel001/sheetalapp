import React, { useState } from 'react'

export default function Counter() {

    const [counter,setcounter] =useState(0)
    const [data,setdata] =useState(10)

    const Inputhendler = (e) => {
     setdata(e.target.value)
    }

    const Dispaly = () => {
        setcounter(parseInt(counter)+data)
    }
  return (
   <> 
   {counter}
   <input type="text" onChange={Inputhendler} value={data} />
    <button onClick={Dispaly}>click</button>
   
   </>
  )
}
