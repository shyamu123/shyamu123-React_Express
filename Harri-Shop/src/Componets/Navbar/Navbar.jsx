import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

import aset_0 from "../../assets/asset0.svg";
import aset_90 from "../../assets/asset90.svg"
import aset_91 from "../../assets/asset91.svg"
import aset_92 from "../../assets/asset 92.svg"
import aset_93 from "../../assets/asset 93.svg"
import { useSelector } from 'react-redux';

import { Offcanvas, Ripple, Dropdown, initTE, } from "tw-elements";
initTE({ Offcanvas, Ripple, Dropdown });

const Navbar = () => {
  let Data = useSelector((state => state.cartData))
  let WishData = useSelector((state => state.whishData))
  return (
    <>
      <div className="bg-[#f0f2ee] h-[80px]  border-[1px] border-gray-300  border-t-0 border-r-0 border-l-0 navbar">
        <div className="containerr">
          <header>
            <nav className="border-solid">
              <br />
              <ul className="header-menu flex justify-between relative  items-center">
                <a href="#">
                  <img src={aset_0} className='mt-[-3.5px]' alt='Not Show' />
                </a>
                <div className="flex absolute left-[260px] gap-8 ">
                  <div>
                    <Link to="/" className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }}>Home</Link>
                  </div>
                  <div>
                    <Link to='AboutUs' className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }} href="#">About Us</Link>
                  </div>

                  <div>
                    <Link to='Shop' className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }} href="#">Shop</Link>
                  </div>

                  <div className="dropdown inline-block relative">
                    <button className="inline-flex items-center">
                      <span className="hover:text-pink-700">Pages</span>
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <div className="dropdown-menu absolute hidden pt-5 pb-5 px-5 w-48 bg-white shadow-xl text-sm leading-7 cursor-pointer">

                      <Link to="/Faqs" className="hover:text-pink-700">FAQs</Link> <br />
                      <Link to="/Privacy" className="hover:text-pink-700">Privacy & Policy</Link> <br />
                      <Link to="/Terms" className="hover:text-pink-700">Terms & conditions</Link> <br />
                      <Link to="/Login" className="hover:text-pink-700">Login</Link> <br />
                      <Link to="/Register" className="hover:text-pink-700">Register</Link> <br />
                      <Link to="/Forgot" className="hover:text-pink-700">Forget Password</Link> <br />
                      <Link to="/MyCart" className="hover:text-pink-700">My Cart</Link> <br />
                      <Link to="/MyWishlist" className="hover:text-pink-700">My Wishlist</Link> <br />
                      <Link to="/Checkout" className="hover:text-pink-700">Checkout</Link> <br />
                      <Link to="/Error" className="hover:text-pink-700">Error 404</Link>
                    </div>
                  </div>

                  <div>
                    <Link className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }} to="/Contactus">Contact us</Link>
                  </div>
                </div>

                <div className="flex gap-6">
                  <a href="#">
                    <img src={aset_90} alt="Not Show" />
                  </a>
                  <Link to='/Navlogin'>
                    <img src={aset_91} alt="Not Show" />
                  </Link>
                  <Link to='/Mywishlist'>
                    <img src={aset_92} alt="Not Show" />
                    <p className='h-[18px] w-[18px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20'>{WishData.length}</p>
                  </Link>
                  <Link to='' className='btn' data-te-offcanvas-toggle=""
                  data-te-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  data-te-ripple-init=""
                  data-te-ripple-color="light">
                    <img
                      className="mr-1.5 inline-block rounded text-xs font-medium uppercase leading-normal text-white"
                      src={aset_93} alt="Not Show" />
                    <p className='h-[18px] w-[18px] absolute ms-[11px] mt-[-25px]  text-center bg-red-400  rounded-full z-20'>{Data.length}</p>
                  </Link>
                </div>




                
                <div
                  className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
                  tabIndex={-1}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                  data-te-offcanvas-init=""
                >
                  <div className="flex items-center justify-between p-4 bg-yellow-300">
                    <h5
                      className="mb-0 font-semibold leading-normal"
                      id="offcanvasRightLabel"
                    >
                    SHOPPING CART
                    </h5>
                    <button
                      type="button"
                      className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-offcanvas-dismiss=""
                    >
                      <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="offcanvas-body flex-grow overflow-y-auto p-4">...</div>
                </div>























              </ul>
            </nav>
          </header>
        </div>
      </div>


    </>
  )
}

export default Navbar