import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='flex justify-around text-[40px] mt-[30px]'>
        <NavLink to=''>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/Product'>Product</NavLink>
        <NavLink to='/Error'>Error</NavLink>
      </div>
      
      <h1 className='text-[50px] mt-[50px] text-center bg-red-500'>This is a Home Page</h1>

    </div>
  )
}

export default Home
