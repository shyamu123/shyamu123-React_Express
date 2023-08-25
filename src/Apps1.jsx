import { Provider } from "react-redux";
import React from 'react'
import store from "./Componets/ReduxContainer/Store";
import BookContainer from "./Componets/ReduxContainer/BookContainer";
const Apps1 = () => {
  return (
    <Provider store={store}>
        <BookContainer/>
    </Provider>
  )
}

export default Apps1
