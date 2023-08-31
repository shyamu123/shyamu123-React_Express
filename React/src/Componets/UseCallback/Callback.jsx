import React, { useCallback, useState } from 'react'
import Callbackchild from './Callbackchild';
import Callback1 from './Callback1';
const Callback = () => {

    const[count,setcount]=useState(0);
    const[count1,setcount1]=useState(0);

    const One = useCallback(()=>{
      console.log("Callaqsq");
    },[])

    const Shyamu = useCallback(()=>{
      console.log("Call");
    },[])

  return (
    <>
        <div className='flex justify-center items-center h-[500px]'>
          <div>
            <h1 className='text-center text-3xl'>Call Back</h1>
            <Callback1 one={One} one1={count}/>
            <Callbackchild shyamu={Shyamu} shyamu1={count1}/>
            <p className='text-center text-2xl mt-3'>{count}</p>
            <button className='mt-2 ms-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{setcount(count+1)}}>Car Add</button>
            <p className='text-center text-2xl mt-3'>{count1}</p>
            <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{setcount1(count1+2)}}>New Car Add</button>
          </div>
        </div>
    </>
  )
}

export default Callback