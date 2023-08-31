import { buycake } from "../Redux";
import {connect} from 'react-redux'

function Cakecontainer(props){
    return(
        <div className="">
            <h2 className="text-center text-[30px] mt-[50px]">Number of Cake : {props.numofCakes}</h2>
            <button className="flex m-auto mt-4 text-[30px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={props.buycake}>Buy Caks</button>
        </div>
    )
}

const mapStateToprops = state =>{
    return{
        numofCakes:state.numofCakes
    }
}

const mapDispatchToprops = dispatch =>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToprops,mapDispatchToprops)
(Cakecontainer)