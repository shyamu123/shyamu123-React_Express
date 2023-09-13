import { addToCart, emptyCart } from '../Redux1/Action';
import { removeToCart } from '../Redux1/Action';
import { useDispatch } from 'react-redux'
import { productList } from '../Redux1/ProductAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Main() {

  const data = useSelector(state => state.productData)
  const dispatch = useDispatch();
  console.log("Main Componets", data);

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  return (
    <div>
      <button onClick={() => dispatch(emptyCart())} className='bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2   px-4 rounded'>Empty Cart</button>
      <button onClick={() => dispatch(productList())} className='bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2   px-4 rounded'>Call Product List</button>
      <div>
        {
          data.map((item) =>
            <div key={item.id} className='border-black border-2 p-2 h-auto ms-5 mt-5 w-[250px] inline-block'>
              <img src={item.img} />
              <h1>Title:{item.title}</h1>
              <h1>Name:{item.type}</h1>
              <h1>Brand:{item.brand}</h1>
              <h1>Price:{item.price}</h1>
              <div>
                <button className='border-2 border-black mt-2' onClick={() => dispatch(addToCart(item))}>ADD_TO_CART</button>
              </div>
              <div>
                <button className='border-2 border-black mt-2' onClick={() => dispatch(removeToCart(item.id))}>REMOVE_TO_CART</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Main;