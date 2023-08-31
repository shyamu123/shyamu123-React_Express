import React, { useMemo, useState } from 'react'

const Taskmemo = () => {

    const[out,setout]=useState();
    const[out1,setout1]=useState();

    const[count,setcount]=useState();
    const[count1,setcount1]=useState();

    let a1=()=>{
        setcount(+out+ +out1);
    }

    let a2=()=>{
        setcount1(out -out1);
    }

    let a3=useMemo(()=>{
        console.warn("ODD");
    },[count])

    
    let a4=useMemo(()=>{
        console.warn("EVEN");
    },[count1])

    function input(el){
        setout(el.target.value);
    }

    function input1(el){
        setout1(el.target.value);
    }
  return (
    <div className='flex justify-center items-center h-[500px]'>
        <div>
        <input type='text' className='bg-yellow-300 border border-gray-300 text-gray-900 text-sm rounded-lg block h-[40px] w-[250px] ps-3' placeholder='Enter The Element' onChange={input} value={out}></input>
        <input type='text' className='mt-[25px] bg-yellow-300 border border-gray-300 text-gray-900 text-sm rounded-lg block h-[40px] w-[250px] ps-3' placeholder='Enter The Element' onChange={input1} value={out1}></input>
        
        <p className='mt-2 text-2xl'>Addition &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;{count}</p>
        <p className='text-2xl'>subtraction :&nbsp;&nbsp;{count1}</p>
        <button className='mt-[25px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={a1}>+</button>
        <button className='ms-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={a2}>-</button>
        
        </div>
    </div>
  )
}

export default Taskmemo