import {ADD_TO_CART ,REMOVE_TO_CART , EMPTY_CART} from './constant'

const cartData=(data=[],action)=>{
    switch (action.type){
        case ADD_TO_CART:
            console.log("ADD_TO_CART",action);
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.log("REMOVE_TO_CART",action);
            data.length = data.length ? data.length - 1:[];
            return [...data]; 
        case EMPTY_CART:
            console.log("EMPTY_CART",action);
            data=[]
            return [...data]
        default:return data
    }
}

export default cartData