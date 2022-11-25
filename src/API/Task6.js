import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'

export default function Task6() {
    const [first, setfirst] = useState([])

    useEffect(() => {
      axios.get("https://api.punkapi.com/v2/beers")
      .then((x)=>{
        setfirst(x.data)
      })
    }, [])
    
  return (
    <div>
        <table> {first.map((m) => {
          return (
            <tr>
              <td>{m.id}</td>
              <td>{m.name}</td>
              <td>{m.tagline}</td>
              <td>{m.first_brewed}</td>
              <td>{m.description}</td>
              <td>{m.counties}</td>
              <td>{m.launchYear}</td>
              <td>{m.type}</td>
            </tr>
          );
        })}
        </table>
    </div>
  )
}
