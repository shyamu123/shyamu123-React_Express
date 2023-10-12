import React from 'react'
import './Sec1.css'
import aset_107 from '../../../assets/asset107.png'
import aset_108 from '../../../assets/asset108.png'
import aset_109 from '../../../assets/asset109.png'
const Sec1 = () => {
  return (
    <>
    <div className='shyam sm:h-[550px] md:h-[480px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]'>
      <div className='xl:max-w-[1120px] xl:m-auto xl:h-[450px] py-20 sm:max-w-[550px] sm:m-auto lg:max-w-[900px] lg:m-auto 2xl:max-w-[1400px] md:max-w-[700px] md:m-auto'>
        <p className='text-center text-[#03041c] text-[18px] font-sans xl:mt-28 sm:mt-20'>GET TO KNOW US</p>
        <div className='md:flex xl:block md:justify-center lg:flex '>
          <p className='text-center xl:text-[60px] text-[#03041c] font-sans font-bold sm:text-[40px] md:text-[45px] lg:text-[57px]'>Have a project in mind?</p>
          <p className='text-center xl:text-[60px] text-[#03041c] font-sans font-bold xl:mt-[-15px] sm:text-[40px] md:text-[45px] lg:text-[57px]'>Let’s talk.</p>
        </div>
      </div>
    </div>

    <div className='mt-[-150px]'>
      <div className='sm:max-w-[550px] sm:m-auto md:max-w-[700px] md:m-auto lg:max-w-[900px] xl:max-w-[1120px] xl:m-auto 2xl:max-w-[1400px]'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5'>
          <div className='bg-white shadow-xl sm:h-[300px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
            <img src={aset_108} className='flex m-auto mt-12'></img>
            <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Contact</u></p>
            <a href='#'><p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500'>location@website.com</p></a>
            <a href='#'><p className='text-center text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500'>+(602) 762 472 96</p></a>
          </div>
          <div className='bg-white shadow-xl sm:h-[300px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
          <img src={aset_107} className='flex m-auto mt-12'></img>
          <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Location</u></p>
          <a href='#'><p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500'>88 New South Head Rd,<br></br>Triple, New York</p></a>
          </div>
          <div className='bg-white shadow-xl sm:h-[300px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
          <img src={aset_109} className='flex m-auto mt-12'></img>
          <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Social Media</u></p>
          <p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans'>Follow on social media</p>
          <a href='#'><i className="fa-brands fa-facebook mt-4 text-[20px] hover:text-red-400 duration-500 text-[#525258] sm:ms-[225px] md:ms-[120px] lg:ms-[90px] xl:ms-[130px] 2xl:ms-[175px]"/></a>
          <a href='#'><i className="fa-brands fa-twitter ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
          <a href='#'><i className="fa-brands fa-linkedin-in ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
          <a href='#'><i className="fa-brands fa-youtube ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sec1