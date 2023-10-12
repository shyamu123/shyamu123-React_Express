import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Faqs.css';
import faqs1 from '../../../assets/Faqs/faq-img-2.jpg'
const Faqs = () => {
  return (
    <>

      <div className='py-20 xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
        <div className='grid grid-cols-1'>
          <div>
            <p className='Frequently text-[50px] font-bold text-center mt-[100px]'>Frequently Asked Questions</p>
            <div className='flex justify-center mt-3'>
              <a href='#' className='text-[18px] hover:text-pink-500 hover:duration-300'>Home</a>
              <p className='text-[16px] mt-[2px] ms-3'>Frequently Asked Questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
        <div className='grid grid-cols-1'>
          <div>
            <img src={faqs1} alt='not show'></img>
          </div>
        </div>
      </div>

      <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-[100px] md:w-[510px]'>
          <div className='hover:bg-[#b5b5c285] py-2'>
              <Link to='' className='text-[20px] md:ms-2 '>Generalquestions</Link>
          </div>
          <div className='py-2 hover:bg-[#b5b5c285] md:w-[140px] '>
              <Link to='Community' className='text-[20px] md:ms-5'>Community</Link>
          </div>
          <div className='py-2 hover:bg-[#b5b5c285] md:ms-[-30px] md:w-[120px]'>
              <Link to='Support' className='text-[20px] md:ms-5'>Support</Link>
          </div>
          <Outlet/>
      </div>
  </div>



    </>
  )
}

export default Faqs



