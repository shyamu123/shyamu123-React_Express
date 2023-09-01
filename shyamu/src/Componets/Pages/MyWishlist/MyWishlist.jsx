import React from 'react'
import './MyWishlist.css'
import emptycart from '../../../assets/asset 1.png'
import aset_89 from "../../../assets/asset89.jpeg"

const MyWishlist = () => {
  return (
    <>
    <div className='mt-20'>
    <div className='h-[300px] bg-[#f1f1f1] flex justify-center items-center'>
        <div className=''>
            <p className='text-[70px] text-[#03041c] font-bold mycart'>My Wishlist</p>
            <a href='#'><p className='text-center text-black'>Home<span className='ms-3'>Wishlist</span></p></a>
        </div>
    </div>
    <div className='flex justify-center'>
        <img src={emptycart} alt='not show' className='mt-40'/>
    </div>
    <p className='text-[18px] text-center mt-10 text-[#03041c]'>Your Cart is empty</p>
    <button className='shop flex m-auto hover:bg-black hover:text-white mt-2 px-6 py-2 bg-[#f1f1f1] mb-[130px]'>Go To Shop</button>
</div>

<div className='h-[300px] w-[auto] bg-right'  style={{backgroundImage: `url(${aset_89})`, backgroundSize:"cover"}}>
<div className="mt-14">
    <div className="containerrr"><br/>
        <div className="h-[200px] w-[auto]  bg-white">
            <div className="flex justify-around mt-8">
                <div className="mt-14">
                    <h1 className="text-4xl text-black">Subscribe for <br /> Latest Trends &amp; Offers</h1>
                </div>
                <div className="mt-[70px]">
                    <div className="w-[500px] h-[60px] border border-black flex items-center justify-around">
                        <div className>
                            <input type="text" placeholder="Enter Your Email" className="input1 w-[290px]" />
                        </div>
                        <div className>
                            <a href="#_" className="inline-flex items-center justify-center pt-2 ps-10 pe-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-red-500 duration-500">Subscribe</a>
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

export default MyWishlist
