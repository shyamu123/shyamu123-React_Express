import { SET_PRODUCT_LIST } from "../Type";

export let productData = (data = [], action) => {
    switch(action.type){
        case SET_PRODUCT_LIST:
            return [...action.Topratedd]

        default:
            return data
    }
}

export default productData