import { addToCart} from '../redux/Action';
import { removeTOCart } from '../redux/Action';
import { emptyCart } from '../redux/Actions';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { useSelector } from 'react-redux';

function Main() {

    const data = useSelector(state => state.cartData)
    console.log("Main Component" , data);
    const dispatch = useDispatch();
    const product = {
        name : "iphone",
        type : "Mobile",
        price : 20000,
        color : "red"
    }

    return (
        <div className="App">
            <Header/>
            <button onClick={() => dispatch(addToCart(product))} class="bg-blue-500 hover:bg-blue-700 ms-5 text-white font-bold py-2   px-4 rounded">Add Iteam</button>
            <button onClick={() => dispatch(removeTOCart(product))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ms-5  px-4 rounded">Add Remove</button>
            <button onClick={() => dispatch(emptyCart(product))} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ms-5  px-4 rounded">Empty Cart</button>

        </div>
        );
}
    
export default Main;