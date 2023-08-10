import React from 'react'
import {useEffect,useState}from 'react';

const UseEffect = () => {
    useEffect(()=>{

    },[])
    const [Clicked,setClicked]=useState();
    useEffect(()=>{
        alert('Hello Shyamu');
    });
  return (
    <div>
      <button onClick={()=>setClicked('Ohk')}>ClickMe</button>
      <h1>{Clicked}</h1>
    </div>
  )
}

export default UseEffect
