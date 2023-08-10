import React from 'react'
import { NavLink ,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div className='flex justify-around text-[40px] mt-[30px]'>
        <NavLink to='Iteam1'>Iteam1</NavLink>
        <NavLink to='Iteam2'>Iteam2</NavLink>
        </div>
        <Outlet/>
    </>
  )
}

export default Product
