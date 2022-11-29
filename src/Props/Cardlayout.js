import axios from 'axios';
import { useState , useEffect } from 'react';
import Simplprops from './Simplprops';

export default function Cardlayout() {

    const [first, setfirst] = useState([]);

    useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
     .then((e)=>{
        setfirst(e.data)
     })
    }, [])
    

  return (
    <div >
      {
        first.map((a)=>{
            return(<Simplprops record={a}></Simplprops>)
        })

      }
    </div>
  )
}
