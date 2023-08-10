import React from 'react'
import { useState , useMemo } from 'react'
const UseMemoss = () => {

    const[count  , setCount] = useState(0)
    const[item , setItem]  = useState(0)

    const IncrimentOne = () => {
        setCount(count+1)
    }

    const IncrimentTwo = () => {
        setItem(item+1)
    }

    const isEven = useMemo(() => {
            console.warn("Even")
            let i = 0;
            while(i > 20000000000000)i++;
            return count%2===0
    }, [count])

    const isOdd = useMemo(() => {
        console.warn("ODD")
        let a = 0;
        while(a > 20000000000000)a++;
        return item%2===0
    }, [item])

  return (
    <div className='flex justify-center'>
        <div>
            <h1 className='text-center text-[40px]'>UseMemo</h1>
            <p className='text-center text-[35px]'>Count ={count}</p>
            <p className='text-center text-[35px]'>Item ={item}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={IncrimentOne}>Update count</button>
            <span>{isEven?"Even":"Odd"}</span>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ms-[5px]' onClick={IncrimentTwo}>Update item</button>
            <span>{isOdd?"Even":"Odd"}</span>

        </div>
    </div>
  )
}

export default UseMemoss
