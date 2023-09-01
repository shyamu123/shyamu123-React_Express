import React from 'react'
import Faqs from './Faqs/Faqs'
import Privacy from './Privacy/Privacy'
import Terms from './Terms/Terms'
import Login from './Login/Login'
import Register from './Register/Register'
import Forgot from './Forgot/Forgot'
import MyCart from './MyCart/MyCart'
import MyWishlist from './MyWishlist/MyWishlist'
import Checkout from './Checkout/Checkout'
import Error from './Error/Error'
import Navlogin from './Navlogin/Navlogin'
import NavMywishlist from './NavMywishlist/NavMywishlist'

const Pages = () => {
  return (
    <>
        <Error/>
        <Faqs/>
        <Privacy/>
        <Terms/>
        <Login/>
        <Register/>
        <Forgot/>
        <MyCart/>
        <MyWishlist/>
        <Checkout/>
        <Navlogin/>
        <NavMywishlist/>
    </>
  )
}

export default Pages
