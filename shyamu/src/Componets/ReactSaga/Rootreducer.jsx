import { combineReducers } from "redux";
import cartData from  './Reducer'
import productData from "./Product/Productreducer";
import whishData from "./Wishreducer";
export default combineReducers({cartData, whishData, productData})