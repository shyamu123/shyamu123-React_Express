import { Buy_Book } from "./BookType"

const initialstate = {
    NumberofBookes : 100
}

const BoookRedusers=(state = initialstate,action)=>{
    switch(action.type){
        case Buy_Book : return{
            ...state, NumberofBookes : state.initialstate-1    
        }
        default : return state
    }
}

export default BoookRedusers;