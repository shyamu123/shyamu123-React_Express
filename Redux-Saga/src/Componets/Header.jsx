import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const result = useSelector(state => state.cartData)
  console.log("redux data in", result);
  return (
    <>

      <div className='h-[100px] w-full bg-yellow-300 p-5'>
        <div>
          <i class="fa-solid fa-cart-shopping text-[50px] z-10 relative"></i>
        </div>
      </div>

      <div className='mt-[20px] ms-[20px]'>
        <p className='h-[25px] w-[25px] mt-[-105px] ms-[35px] text-center bg-red-500 absolute rounded-full z-20 '>{result.length}</p>
      </div>
    </>
  )
}

export default Header