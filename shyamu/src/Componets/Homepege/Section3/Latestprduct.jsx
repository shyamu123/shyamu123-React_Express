import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../ReactSaga/Product/Productlist';
import { addToCart } from '../../ReactSaga/Action';
import { addTowish } from '../../ReactSaga/Action';

const Latestprduct = () => {
    
    let [showModal, setShowModal] = useState(false)
    let [num, setNum] = useState(1)

    useEffect(() => {
        dispatch(productList())
    }, [])

    let dispatch = useDispatch();
    let data = useSelector((state) => state.productData)
    return (
        <>
            <div className='containerrr flex flex-wrap mx-auto gap-x-[26px] '>
                {
                    data.filter((el) => { return el.type === 'latest product' }).map(topratedd => {
                        return (
                            <div class="one  inline-block w-[260px] ">

                                <div class="card h-[300px] ">
                                    <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer " style={{ height: "300px" }} />
                                    <div class="info">

                                        <div class="one1 hover:bg-[#f50963] group">
                                            <a href='#'>
                                                <i class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                                            </a>
                                        </div>

                                        <div onClick={() => setShowModal(true)} class="one2 hover:bg-[#f50963] group">

                                            <i onClick={() => setShowModal(true)} class="fa-regular fa-eye text-[20px] ms-2 mt-2 cursor-pointer group-hover:text-white"></i>

                                        </div>

                                        {showModal ? (
                                            <div>
                                                <div
                                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">

                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">

                                                            <div className="w-full text-end h-auto">
                                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                                    x
                                                                </button>
                                                            </div>

                                                            <div className='flex justify-center gap-10'>
                                                                <div className='w-[48%] h-auto'>
                                                                    <img src={topratedd.image} className='w-full h-[450px] px-10' />

                                                                    <div className='flex justify-center gap-5 my-7 px-10'>
                                                                        <div className='w-1/4'>
                                                                            <img src={topratedd.image} className='w-full h-auto' />
                                                                        </div>

                                                                        <div className='w-1/4'>
                                                                            <img src={topratedd.image} className='w-full h-auto' />
                                                                        </div>

                                                                        <div className='w-1/4'>
                                                                            <img src={topratedd.image} className='w-full h-auto' />
                                                                        </div>

                                                                        <div className='w-1/4'>
                                                                            <img src={topratedd.image} className='w-full h-auto' />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className='w-[52%] h-auto'>
                                                                    <h1 className='text-4xl font-semibold'>{topratedd.Name}</h1>
                                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                                    <p className='mt-10'><del>{topratedd.Delprice}</del> ${topratedd.proce}</p>

                                                                    <div className='flex mt-5'>
                                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => { if (num !== 1) setNum(num - 1) }}>-</div>
                                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                                    </div>

                                                                    <div className='flex mt-5 gap-2'>
                                                                        <button onClick={() => dispatch(addToCart(topratedd))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                                        <button onClick={() => dispatch(addTowish(topratedd))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                                    </div>

                                                                    <hr className='mt-10 mr-10' />

                                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                            </div>
                                        ) : null}


                                        <div class="one3 hover:bg-[#f50963] group">
                                            <a href='#'>
                                                <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>

                                            </a>
                                        </div>
                                    </div>
                                    <div class="info1">
                                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                                    </div>
                                </div>
                                <p className="text-[15px] mt-2">{topratedd.Name}</p>
                                <p className="text-gray-700 mt-1"><del>{topratedd.Price1}</del>{topratedd.Price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Latestprduct