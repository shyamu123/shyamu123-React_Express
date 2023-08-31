import React, { useState } from 'react'

const UseMemo = () => {

    let[count,setcount]=useState(0);
    const[item,setitem]=useState(0);

    function hello(){
        return count+0;
    }
  return (  
    <div className='flex justify-center'>
        <div>
            <h1 className='text-center text-[40px]'>UseMemo</h1>
            <p className='text-center text-[35px]'>Count ={hello()}</p>
            <p className='text-center text-[35px]'>Item ={item}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>setcount(count+1)}>Update count</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-3' onClick={()=>setcount(count-1)}>Remove count</button>
            
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ms-[5px]' onClick={()=>setitem(item+1)}>Update item</button>
                
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-3' onClick={()=>setitem(item-1)}>Remove item</button>
            </div>
        </div>
    </div>
  )
}

export default UseMemo
