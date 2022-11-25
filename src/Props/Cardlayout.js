import axios from 'axios';
import { useState , useEffect } from 'react';

export default function Cardlayout() {

    const [first, setfirst] = useState([]);

    useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
     .then((e)=>{
        setfirst(e.data)
     })
    }, [])
    

  return (
    <div style={{backgroundColor:'none'}}>
      {
        first.map((a)=>{
            return(<Cardlayout record={a}></Cardlayout>)
        })

      }
    </div>
  )
}
