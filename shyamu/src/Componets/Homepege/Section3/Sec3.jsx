import React from 'react'
import './Sec3.css';
import {Link, Outlet} from 'react-router-dom';

const Sec3 = () => {
    return (
        <>
            <div className="containerrr">
                <div className="flex relative items-center mt-10">
                    <div className="bg-[rgb(245,9,99)] h-[30px] w-[3px]"></div>
                    <div className='flex items-center justify-between w-[1120px]'>
                        <div className>
                            <p className="ms-3 text-3xl font-bold">Popular Products</p>
                        </div>
                        <div className="">
                            <Link to="/" id='Sec3' className="me-6 font-sans text-[14px] leading-[26px] text-center font-medium">Top Rated</Link> 
                            <Link to="Bestselling" id='Sec3' className="me-6 font-sans text-[14px] leading-[26px] text-center font-medium">Best Selling</Link> 
                            <Link to="Latestprduct" id='Sec3' className="font-sans text-[14px] leading-[26px] text-center font-medium">Latest Product</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Sec3
