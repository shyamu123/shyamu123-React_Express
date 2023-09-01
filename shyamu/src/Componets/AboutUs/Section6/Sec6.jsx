import React from 'react'
import "./Sec6.css";
import asset34 from '../../../assets/aboutus/asset34.svg'
import asset32 from '../../../assets/aboutus/asset32.svg'

const Sec6 = () => {
  return (
    <>
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-rows-2 '>
                <div className='mt-[90px]'>
                    <p className='one xs:text-[40px] sm:text-[40px] md:text-[60px] lg:text-[60px]'>One <span className='text-[#f50963]'>Team <span className='text-black'>,</span><img src={asset34} className='xs:h-[14px] xs:ms-[70px] xs:mt-[-10px] sm:h-[14px] sm:ms-[80px] sm:mt-[-13px] md:h-[20px] md:ms-[120px] md:mt-[-20px]'></img></span></p>
                    <p className='one xs:text-[40px] sm:text-[35px] md:text-[51px] lg:text-[60px]'>Many Talents</p>
                </div>
                <div className='mt-[90px]'>
                    <a href='#' className='join flex xs:justify-start sm:justify-end text-[17px] md:mt-[120px] xs:mt-[-50px] sm:mt-[70px] underline'>Join Our Team<img src={asset32} className='h-[10px] mt-2'></img></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sec6
