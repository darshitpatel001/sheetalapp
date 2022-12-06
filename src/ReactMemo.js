import React from 'react'
import { useState } from 'react';
import Reactmemo0 from './Reactmemo0';

export default function ReactMemo() {
    const [data, setdata] = useState();
    const [item, setitem] = useState([]);

    const myHandler = (e) =>{
        setdata(e.target.value)
    }

    const mysubmit = () => {
        let myitem = [...item]
        myitem.push(data);
        setitem(myitem)
    }
  return (
    <div>
        <input type="text" onChange={myHandler}/>

        <button onClick={mysubmit}>Submit</button>
        
        <Reactmemo0 data={item}/>
    </div>
  )
}
