import React from 'react'
import Main from './Componets1/Main'
import Header from './Componets1/Header'
import { Route , Routes } from 'react-router-dom';
import Cart from './Redux1/Cart';


const App = () => {
  return (
    <>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App;
