import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Cart.css';
import aset_11 from "./asset11.jpeg"
import aset_17 from "./asset17.jpeg"


const Cart_logic = () => {

    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);

    useEffect(() => {
        setCount1(count);
    },[count]);

    return (
        <div>
            <Navbar Count={count1}></Navbar>

            <button className='border-black border-2 p-2 ms-12 mt-3' onClick={()=>setCount(0)}>Clear</button>

            <div className="flex justify-betwee n mt-[30px] ms-10">
                    <div className>
                        <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
                            <a href="#"><img src={aset_11} alt="" className="ss m-auto" /></a>
                        </div>
                        <p className="text-[15px] mt-2">Buy Guild Planer - 900w</p>
                        <p className="text-gray-700 mt-1">$239.00</p>
                        <button className='border-black border-2 p-2' onClick={()=>setCount(count+1)}>Add to cart</button>

                    </div>
                    <div className="ms-5">
                        <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
                            <a href="#">
                                <img src={aset_17} alt="" className="ss m-auto" />
                            </a>
                        </div>
                        <p className="text-[15px] mt-2">Apple Watch Series 8</p>
                        <p className="text-gray-700 mt-1">$188.00</p>
                        <button className='border-black border-2 p-2' onClick={()=>setCount(count+1)}>Add to cart</button>
                    </div>
            </div>


        </div>
    )
}

export default Cart_logic
