import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
// import Aboutus from './Home/Aboutus/Aboutus';
// import Harrishop from './Home/Section1/Harrishop';
import Fotter from './Componets/Fotter/Fotter';
import Homepege from './Componets/Homepege/Homepege';
// import Contactus from './Home/Contactus/Contactus';
import Contactus from './Componets/ContactUs/Contactus';
import Faqs from './Componets/Pages/Faqs/Faqs';
import Privacy from './Componets/Pages/Privacy/Privacy';
import Terms from './Componets/Pages/Terms/Terms';
import Login from './Componets/Pages/Login/Login';
import Register from './Componets/Pages/Register/Register';
import Forgot from './Componets/Pages/Forgot/Forgot';
import MyCart from './Componets/Pages/MyCart/MyCart';
import MyWishlist from './Componets/Pages/MyWishlist/MyWishlist';
import Checkout from './Componets/Pages/Checkout/Checkout';
import Error from './Componets/Pages/Error/Error';
import Navlogin from './Componets/Pages/Navlogin/Navlogin';
import NavMywishlist from './Componets/Pages/NavMywishlist/NavMywishlist'
import AboutUs from './Componets/AboutUs/AboutUs';
import Shop from './Componets/Shop/Shop';
import Toprated from './Componets/Homepege/Section3/Toprated';
import Bestselling from './Componets/Homepege/Section3/Bestselling';
import Latestprduct from './Componets/Homepege/Section3/Latestprduct';
import { Provider } from 'react-redux';
import store from './Componets/ReactSaga/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <BrowserRouter>
  <Navbar/> 
      <Routes>
        <Route path="/" element={<Homepege/>}>
          <Route path="/" element={<Toprated/>}></Route>
          <Route path="Bestselling" element={<Bestselling/>}></Route>
          <Route path="Latestprduct" element={<Latestprduct/>}></Route>
        </Route>  
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/ContactUs" element={<Contactus/>}></Route>
        <Route path="/Faqs" element={<Faqs/>}></Route>
        <Route path="/Privacy" element={<Privacy/>}></Route>
        <Route path="/Terms" element={<Terms/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Forgot" element={<Forgot/>}></Route>
        <Route path="/MyCart" element={<MyCart/>}></Route>
        <Route path="/MyWishlist" element={<MyWishlist/>}></Route>
        <Route path="/Checkout" element={<Checkout/>}></Route>
        <Route path="/Error" element={<Error/>}></Route>
        <Route path="/Navlogin" element={<Navlogin/>}></Route>
        <Route path="/NavMywishlist" element={<NavMywishlist/>}></Route>
        <Route path="/MyCart" element={<MyCart/>}></Route>
      </Routes>
    <Fotter/> 
  </BrowserRouter>
  </Provider>

);