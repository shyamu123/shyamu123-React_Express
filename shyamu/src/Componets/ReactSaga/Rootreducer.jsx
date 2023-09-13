import { combineReducers } from "redux";
import cartData from  './Reducer'
import productData from "./Product/Productreducer";

export default combineReducers({cartData, productData})