import React, { useEffect, useState } from 'react'

const Shyamu = () => {

    const[count,setcount]=useState(0);
    const[data,setdata]=useState("ABC");
    // const[time,settime]=useState(1);

    useEffect(()=>{
        console.log("OOPs!")
    },[data])
    function xyz(){
        setcount(count+1);
    }

    function Update(){
        setdata("QQ")
    }


  return (
    <>
        <div>
            <h1>{count}</h1>
            <button onClick={xyz}>+</button>
            <button onClick={Update}>Update</button>
        </div>
    </>
  )
}

export default Shyamu



















//Sideefact
//setIntervaltimer, dom