import React from 'react'
import { useEffect,useState } from 'react'
const Time = () => {
    const [count,setcount]=useState(1);
    useEffect(()=>{
        setTimeout(() => {
            setcount(count+1)
        }, 1000);
    })
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Time
