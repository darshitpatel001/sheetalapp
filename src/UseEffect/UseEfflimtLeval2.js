import React from 'react'
import { useState , useEffect } from 'react'

export default function UseEfflimtLeval2(props) {

    const [data, setdata] = useState([]);
    // const [pageid, setpageid] = useState(3);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit="+ props.pageid)
        .then(y=> y.json())
        .then(y=>{
            console.log(y);
            setdata(data)
        })
    },[props.pageid])

    // const handler =(e) =>{
    //     setpageid(e.target.value);
    // }

  return (
    <div>
        {/* <input type="number" value={pageid} onChange={handler}/> */}
        <h4>
            {
                data.map((ele)=>{
                    return (
                        <h3>{ele.id}</h3>
                    )
                })
            }
        </h4>
    </div>
  )
}
