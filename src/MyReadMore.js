import React, { useMemo ,useState } from 'react'

export default function MyReadMore(props) {
    const [showw, setshoww] = useState(false);

    const truee = useMemo(() => {
        console.log("ddd.........")
        return props.text.slice(0,30).
        concat("...")
    },[])
    
  return (
    <div>
        <p onClick={()=>{setshoww(!showw)}}>
            {showw? props.text :truee}
        </p> 
    
    </div>
  )
}
