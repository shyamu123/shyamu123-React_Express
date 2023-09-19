import React from 'react'
import './MyCart.css'
import emptycart from '../../../assets/asset 1.png'
import aset_89 from "../../../assets/asset89.jpeg"
import aset_11 from "../../../assets/asset11.jpeg"

import { useSelector, useDispatch } from 'react-redux'
import { decriment_qty, incriment_qty, removeToCart } from '../../ReactSaga/Action'

const MyCart = () => {
    let dispatch = useDispatch()
    let cartData = useSelector((state) => state.cartData)
    let cartPrice = cartData.length && cartData.map((item) => item.Price).reduce((pre, next) => pre + next)
    return (
        <>
            <div className='mt-20'>
                <div className='h-[300px] bg-[#f1f1f1] flex justify-center items-center'>
                    <div className=''>
                        <p className='text-[70px] text-[#03041c] font-bold mycart'>My Cart</p>
                        <a href='#'><p className='text-center text-black'>Home<span className='ms-3'>Wishlist</span></p></a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={emptycart} alt='not show' className='mt-40' />
                </div>
                <p className='text-[18px] text-center mt-10 text-[#03041c]'>Your Cart is empty</p>
                <button className='shop flex m-auto hover:bg-black hover:text-white mt-2 px-6 py-2 bg-[#f1f1f1] mb-[130px]'>Go To Shop</button>
            </div>

            <table className='table-auto w-11/12 xl:w-9/12 mx-auto mt-12 text-lg '>
                <thead>
                    <tr className='border'>
                        <th className='border p-5'>Images</th>
                        <th className='border p-5'>Name</th>
                        <th className='border p-5'>Unit price</th>
                        <th className='border p-5'>Quntity</th>
                        <th className='border p-5'>Total</th>
                        <th className='border p-5'>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartData.map((item) =>
                            <tr key={item.id} className='border text-center'>
                                <td className='border'><img src={item.image} className='w-auto h-24 mx-auto my-3' /></td>
                                <td className='border'>${item.Name}</td>
                                <td className='border'>${item.price2}</td>
                                <td className='flex justify-center items-center mt-10 gap-5'>
                                    <button className='border px-3 py-1' onClick={()=>dispatch(decriment_qty(item.id))}>-</button>
                                    <p className=''>{item.quntity}</p>
                                    <button className='border px-3 py-1' onClick={()=>dispatch(incriment_qty(item.id))}>+</button>
                                </td>
                                <td className='border'>${item.Price.toFixed(2)}</td>
                                <td className='border'><button onClick={() => dispatch(removeToCart(item.id))}>x</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


            <div className='w-10/12 h-auto flex justify-end mt-10'>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Cart Totals</h1>
                    <h1 className='w-96 h-10 text-lg items-center mt-5 border flex justify-between px-4'> <p>Subtotal</p> <p> ${cartPrice.toFixed(2)}</p></h1>
                    <h1 className='w-96 h-10 text-lg items-center border flex justify-between px-4'> <p>Total</p> <p> ${cartPrice.toFixed(2)}</p></h1>
                </div>
            </div>

            <div className='h-[300px] w-[auto] bg-right' style={{ backgroundImage: `url(${aset_89})`, backgroundSize: "cover" }}>
                <div className="mt-14">
                    <div className="containerrr"><br />
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

export default MyCart
