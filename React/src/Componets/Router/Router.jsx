import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Product from './Product'
import Iteam1 from './Iteam1'
import Iteam2 from './Iteam2'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Product' element={<Product/>}>
              <Route path='Iteam1' element={<Iteam1/>}/>
              <Route path='Iteam2' element={<Iteam2/>}/>
            </Route>
            <Route path='/Error' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
