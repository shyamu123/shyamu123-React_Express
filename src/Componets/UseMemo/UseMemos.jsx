import React from 'react'
import { useState , useMemo} from 'react'

const UseMemos = () => {

    let[count,setcount]=useState(0);
    const[item,setitem]=useState(0);

    const multiMemo = useMemo(
        function MultiCount(){
            console.warn("MultiCount");
            return count*2;
        } , [count])

  return (
    <div className='flex justify-center'>
        <div>
            <h1 className='text-center text-[40px]'>UseMemo</h1>
            <p className='text-center text-[35px]'>Count ={multiMemo}</p>
            <p className='text-center text-[35px]'>Item ={item}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>setcount(count+1)}>Update count</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ms-[5px]' onClick={()=>setitem(item+1)}>Update item</button>
        </div>
    </div>
  )
}

export default UseMemos
