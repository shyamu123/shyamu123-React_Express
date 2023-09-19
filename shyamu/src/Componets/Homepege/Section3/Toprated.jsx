import React, { useEffect } from 'react'
// import './Sec3.css';
// import Topratedd from './Topratedd.json'
// import aset_11 from "../../../assets/asset11.jpeg"
// import aset_12 from "../../../assets/asset 12.svg"
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../ReactSaga/Product/Productlist'
import { addToCart, addTowish } from '../../ReactSaga/Action'

const Toprated = () => {

    let dispatch = useDispatch();
    let data = useSelector((state) => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])
    return (
        <>
            <div className='containerrr h-auto flex justify-between flex-wrap'>
                {
                    data.filter((el) => { return el.type === 'top rated' }).map(topratedd => {
                        return (
                            <div class="one">
                                <div class="card h-[300px] w-[260px]">
                                    <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                                    <div class="info">
                                        <div class="one1 hover:bg-[#f50963] group">
                                            <i class="fa-regular fa-heart text-[20px] ms-2 mt-2 cursor-pointer group-hover:text-white" onClick={() => dispatch(addTowish(topratedd))}></i>
                                        </div>
                                        <div class="one2 hover:bg-[#f50963] group">

                                            <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 cursor-pointer group-hover:text-white"></i>

                                        </div>
                                        <div class="one3 hover:bg-[#f50963] group">
                                            <i class="fa-solid fa-link text-[20px] ms-2 mt-2 cursor-pointer group-hover:text-white"></i>

                                        </div>
                                    </div>
                                    <div class="info1">
                                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                                    </div>
                                </div>
                                <p className='mt-4'>{topratedd.Name}</p>
                                <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Toprated