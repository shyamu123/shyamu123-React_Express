import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReduex";

const store =configureStore({reducer:rootReducer});
export default store