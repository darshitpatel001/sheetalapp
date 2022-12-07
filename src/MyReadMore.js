import React, { useMemo ,useState } from 'react'

export default function MyReadMore(props) {
    const [show, setshow] = useState(false);

    const truee = useMemo(() => {
        return props.text.slice(0,30).
        concat("...")
    })
  return (
    <div>
        <p onClick={()=>{setshow(!show)}}>
            {show? props.text :truee}
        </p>

    </div>
  )
}
