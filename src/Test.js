import React from 'react'; 
import { useState , useEffect} from 'react';
import axios from 'axios';

export default function Test() {
    const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("https://api.rootnet.in/covid19-in/stats/testing/history")
//         .then(y=> {
//             setData(y.data.data);
//         });
//     }, [])
    
//   return (
//     <div> 
//         {
//             data.map((value) =>{
//                 return (<h4>{value.totalPositiveCases}</h4>)

//             })
//         }
//     </div>
//   )

useEffect(() => {
            axios.get("https://api.escuelajs.co/api/v1/products")
            .then(y=> {
                setData(y.data);
            });
        }, []);
        return (
            <div>
              <table>
                {data.map((value) => {
                  return (
                    <h1>im</h1>
                  );
                })}
              </table>
            </div>
          );
}
