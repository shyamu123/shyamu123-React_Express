import React from 'react'
import '../../Navbar/Navbar.css';
import '../Section4/Sec4.css';
import product_7 from "../../../assets/product-cat-7.jpg"
import assets_10 from "../../../assets/asset 10.jpeg"
import assets_9 from "../../../assets/asset 9.jpeg"
import assets_8 from "../../../assets/asset 8.jpeg"

const Sec4 = () => {

  return (
    <>
        <div className='containerrr'>
            <div className='mt-[200px]'>
                <div className='flex justify-between'>
                    <div className="flex">
                        <p className="relative after:absolute bg-red-500 h-[35px] w-[4px] mt-[2px]" />
                        <p className='mt-[3px] text-[30px] leading-[30px] font-bold ms-3'>Deal of The Day</p>
                    </div>
                    <div>
                        <button className='bg-[#f50963] px-7 hover:bg-blue-400 hover:duration-500 py-2 text-[16px] text-[white] leading-[26px]   text-center tracking-[-0.32px]' style={{fontFamily:"sans-serif", fontWeight:"400"}}>View All Products</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-[25px]'>
                <div className='h-[180px] w-[550px] border-[1px] border-[#ededf2] mt-[30px] relative'>
                    <div className='h-[43px] w-[30px] bg-white rounded-full mt-[-30px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[50px] w-[60px] bg-white mt-[-23px] ms-[-9px]'></div>
                    </div>
                    <div className='h-[30px] w-[30px] bg-white rounded-full mt-[161px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[12px] w-[60px] bg-white mt-[17px] ms-[-15px]'></div>
                    </div>
                    <div className='border-[2px] border-dashed border-[#ededf2] h-[140px] w-[1px] mt-[16px] ms-[363px]'></div>
                    
                    <div className='flex'>
                        <div className='h-[140px] w-[130px] ms-[20px] mt-[-140px] bg-gray-500'>
                            <img src={product_7} className='h-[140px]'></img>
                        </div>
                        <div>
                            <p className='mt-[-130px] ms-[18px] text-[18px]'>
                            August Gift Voucher<br/><span className='text-red-600'>10%</span> Off</p>
                            <div className='flex mt-[15px] text-[14px]'>
                                    <p className='ms-[20px]'>25 <br/>DAY</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>8 <br/>HRS</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>60 <br/>MIN</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>10 <br/>SEC</p>
                            </div>
                            <div>
                                <p className='ms-[227px] mt-[-95px] mb-[30px] text-[15px]'>Coupon<span className='text-green-600 ms-1'>Active</span></p>
                                <a href='#' className='ms-[227px] mt-[100px] bg-[#e5f2f2] border-[2px] border-[#9ccdcd] border-dashed py-2 px-7 text-[#609fa1]'><button>A U G U S T23</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[180px] w-[550px] border-[1px] border-[#ededf2] mt-[30px] relative'>
                    <div className='h-[43px] w-[30px] bg-white rounded-full mt-[-30px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[50px] w-[60px] bg-white mt-[-23px] ms-[-9px]'></div>
                    </div>
                    <div className='h-[30px] w-[30px] bg-white rounded-full mt-[161px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[12px] w-[60px] bg-white mt-[17px] ms-[-15px]'></div>
                    </div>
                    <div className='border-[2px] border-dashed border-[#ededf2] h-[140px] w-[1px] mt-[16px] ms-[363px]'></div>
                    
                    <div className='flex'>
                        <div className='h-[140px] w-[130px] ms-[20px] mt-[-140px] bg-gray-500'>
                            <img src={assets_10} className='h-[140px]'></img>
                        </div>
                        <div>
                            <p className='mt-[-130px] ms-[18px] text-[18px]'>
                            August Gift Voucher<br/><span className='text-red-600'>10%</span> Off</p>
                            <div className='flex mt-[15px] text-[14px]'>
                                    <p className='ms-[20px]'>0 <br/>DAY</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>HRS</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>MIN</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>SEC</p>
                            </div>

                            <div>
                                <p className='ms-[227px] mt-[-95px] mb-[30px] text-[15px]'>Coupon<span className='text-green-600 ms-1'>Active</span></p>
                                <a href='#' className='ms-[227px] mt-[100px] bg-[#e5f2f2] border-[2px] border-[#9ccdcd] border-dashed py-2 px-7 text-[#609fa1]'><button>A U G U S T23</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between mt-[25px]'>
                <div className='h-[180px] w-[550px] border-[1px] border-[#ededf2] mt-[30px] relative'>
                    <div className='h-[43px] w-[30px] bg-white rounded-full mt-[-30px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[50px] w-[60px] bg-white mt-[-23px] ms-[-9px]'></div>
                    </div>
                    <div className='h-[30px] w-[30px] bg-white rounded-full mt-[161px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[25px] w-[60px] bg-white mt-[17px] ms-[-15px]'></div>
                    </div>
                    <div className='border-[2px] border-dashed border-[#ededf2] h-[140px] w-[1px] mt-[16px] ms-[363px]'></div>
                    
                    <div className='flex'>
                        <div className='h-[140px] w-[130px] ms-[20px] mt-[-140px] bg-gray-500'>
                            <img src={assets_9} className='h-[140px]'></img>
                        </div>
                        <div>
                            <p className='mt-[-130px] ms-[18px] text-[18px]'>
                            August Gift Voucher<br/><span className='text-red-600'>10%</span> Off</p>
                            <div className='flex mt-[15px] text-[14px]'>
                                    <p className='ms-[20px]'>72 <br/>DAY</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>14 <br/>HRS</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>7 <br/>MIN</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>17 <br/>SEC</p>
                            </div>
                            <div>
                                <p className='ms-[227px] mt-[-95px] mb-[30px] text-[15px]'>Coupon<span className='text-green-600 ms-1'>Active</span></p>
                                <a href='#' className='ms-[227px] mt-[100px] bg-[#e5f2f2] border-[2px] border-[#9ccdcd] border-dashed py-2 px-7 text-[#609fa1]'><button>A U G U S T23</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[180px] w-[550px] border-[1px] border-[#ededf2] mt-[30px] relative'>
                    <div className='h-[43px] w-[30px] bg-white rounded-full mt-[-30px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[50px] w-[60px] bg-white mt-[-23px] ms-[-9px]'></div>
                    </div>
                    <div className='h-[30px] w-[30px] bg-white rounded-full mt-[161px] ms-[350px] border-[#ededf2] border-[1px] absolute z-10'>
                        <div className='h-[25px] w-[60px] bg-white mt-[17px] ms-[-15px]'></div>
                    </div>
                    <div className='border-[2px] border-dashed border-[#ededf2] h-[140px] w-[1px] mt-[16px] ms-[363px]'></div>
                    
                    <div className='flex'>
                        <div className='h-[140px] w-[130px] ms-[20px] mt-[-140px] bg-gray-500'>
                            <img src={assets_8} className='h-[140px]'></img>
                        </div>
                        <div>
                            <p className='mt-[-130px] ms-[18px] text-[18px]'>
                            August Gift Voucher<br/><span className='text-red-600'>10%</span> Off</p>
                            <div className='flex mt-[15px] text-[14px]'>
                                    <p className='ms-[20px]'>0 <br/>DAY</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>HRS</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>MIN</p>
                                    <div className='border-[1px] ms-[10px] mt-[10px] w-[1px] h-[25px]'></div>
                                    <p className='ms-[15px]'>0 <br/>SEC</p>
                            </div>
                            <div>
                                <p className='ms-[227px] mt-[-95px] mb-[30px] text-[15px]'>Coupon<span className='text-green-600 ms-1'>Active</span></p>
                                <a href='#' className='ms-[227px] mt-[100px] bg-[#e5f2f2] border-[2px] border-[#9ccdcd] border-dashed py-2 px-7 text-[#609fa1]'><button>A U G U S T23</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           </>
  )
}

export default Sec4
