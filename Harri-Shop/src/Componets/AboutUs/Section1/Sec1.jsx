import React from 'react'
import "./Sec1.css";
import aset_22 from "../../../assets/aboutus/asset22.jpeg"

const Sec1 = () => {
  return (
    <>
    <br></br><br></br>
    <div className='h-[580px] w-full iphone relative' style={{backgroundImage: `url(${aset_22})`, backgroundSize:"cover"}}>
    <div className='ovelay absolute'></div><br/>
    <div className='mt-[220px]'>
      <p className='text-center font-sans text-[18px] leading-[19.98px] text-[#ffff] font-medium'>Aboutus us</p>
      <div className='xs:w-[150px] sm:w-[500px] m-auto'>
        <p className='xs:text-[45px] text-center text-[70px] leading-[70px] tracking-[-2.8px] text-[#ffff] font-bold'>Welcome to our Harri Shop</p>
      </div>
    </div>
</div>
    </>
  )
}

export default Sec1