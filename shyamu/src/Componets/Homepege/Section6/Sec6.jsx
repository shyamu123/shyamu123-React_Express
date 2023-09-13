import React from 'react'
import './Sec6.css';
import aset_89 from "../../../assets/asset89.jpeg"

const Sec6 = () => {
    return (
        <>
            <div className='xs:h-[350px] lg:h-[300px] xl:h-[300px] w-[auto] bg-right'  style={{backgroundImage: `url(${aset_89})`, backgroundSize:"cover"}}>
                <div className="mt-14">
                    <div className="containerrr"><br/>
                        <div className="xs:h-[240px] xs:w-[300px] xs:ms-[20px] sm:w-[600px] md:w-[730px] lg:w-[985px] lg:h-[200px] xl:h-[200px] xl:ms-[0px] xl:w-[1125px] w-[auto] bg-white">
                            <div className="flex xs:block lg:flex justify-around mt-8">
                                <div className="xs:mt-[10px] lg:mt-[30px] xl:mt-[25px]">
                                    <h1 className="xs:text-[25px] xs:leading-[30px] xs:ms-[20px] xs:pt-[20px] sm:text-[30px] sm:ms-[50px] sm:pt-[40px] sm:leading-[35px] md:ms-[70px] lg:ms-[20px] xl:text-4xl text-black">Subscribe for <br /> Latest Trends &amp; Offers</h1>
                                </div>
                                <div className="lg:mt-[120px] mt-[70px]">
                                    <div className="xs:w-[260px] xs:ms-[20px] xs:mt-[-60px] xs:h-[60px] sm:w-[500px] sm:ms-[50px] sm:mt-[-50px] md:ms-[70px] lg:ms-[10px] xl:w-[500px] xl:h-[60px] border border-black flex xs:block sm:flex items-center justify-around">
                                        <div className>
                                            <input type="text" placeholder="Enter Your Email" className="input1 xs:w-[250px] xs:h-[58px] xs:ps-[25px] xs:ms-[8px] sm:ps-[3px] sm:ms-[5px] xl:w-[290px]" />
                                        </div>
                                        <div className>
                                            <a href="#_" className="inline-flex items-center justify-center pt-2 ps-10 pe-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-red-500 duration-500 xs:mt-[15px] sm:mt-[0px]">Subscribe</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec6
