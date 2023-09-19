import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../ReactSaga/Product/Productlist';
import { addToCart } from '../../ReactSaga/Action';

const Latestprduct = () => {
  let dispatch = useDispatch();
    let data = useSelector((state)=> state.productData)
  
    useEffect(()=>{
        dispatch(productList())
    },[])

  return (
    <>
    <div className='containerrr flex flex-wrap mx-auto gap-x-[26px] '>
    {
        data.filter((el) => {return el.type === 'latest product'}).map(topratedd => {
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
                    <div class="one2 hover:bg-[#f50963] group">
                        <a href='#'>
                            <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>

                        </a>
                    </div>
                    <div class="one3 hover:bg-[#f50963] group">
                        <a href='#'>
                            <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>

                        </a>
                    </div>
                        </div>
                        <div class="info1">
                            <button  onClick={()=>dispatch(addToCart(topratedd))}  class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
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