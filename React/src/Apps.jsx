import React from 'react'
// import Cakecontainer from './Componets/CakeContainer/Cakecontainer'
import { Provider } from 'react-redux'
import store from './Componets/Redux/store'
// import HookContainer from './Componets/CakeContainer/HookContainer'
import UserContainer from './Componets/AA/UserContainer'
const Apps = () => {
  
    return (
      <>
        <div>
          <Provider store={store}>
            <UserContainer/>
          </Provider>
        </div>
      </>
    )
  }
  
export default Apps

