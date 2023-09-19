import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../ReactSaga/Product/Productlist';
import { addToCart } from '../../ReactSaga/Action';

// import product_17 from "../../../assets/product-17.jpg"
// import product_20 from "../../../assets/product-20.jpg"
// import product_14 from "../../../assets/product-14.jpg"
// import product_16 from "../../../assets/product-16.jpg"
// import product_13 from "../../../assets/product-13.jpg"
// import product_19 from "../../../assets/product-19.jpg"
// import product_15 from "../../../assets/product-15.jpg"
// import product_18 from "../../../assets/product-18.jpg"



const Bestselling = () => {

    let dispatch = useDispatch();
    let data = useSelector((state)=> state.productData)
  
    useEffect(()=>{
        dispatch(productList())
    },[])

  return (
    <>
    <div className='containerrr h-auto flex justify-between flex-wrap'>
    {
        data.filter((el) => {return el.type === 'best selling'}).map(topratedd => {
            return (
                <div class="one">
                    <div class="card h-[300px] w-[260px]">
                        <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
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
                    <p className='mt-4 w-[260px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                </div>
            )
        })
    }
</div>
</>

  )
}

export default Bestselling
