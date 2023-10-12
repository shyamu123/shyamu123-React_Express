import React from 'react'
import { addTowish, addToCart } from '../../ReactSaga/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { productList } from '../../ReactSaga/Product/Productlist'
import { useEffect } from 'react'
import { useState } from 'react'



const Sec1 = () => {

  let dispatch = useDispatch();
  let data = useSelector((state) => state.productData)
  let [count, setCount] = useState("")

  useEffect(() => {
    dispatch(productList())
  }, [])

  let [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = 9;
  let lastIndex = currentPage * recordsPerPage;
  let firstIndex = lastIndex - recordsPerPage;
  let record = data.slice(firstIndex, lastIndex);
  let nPages = Math.ceil(data.length / recordsPerPage);
  let numbers = [...Array(nPages + 1).keys()].slice(1);

  let previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  let nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  let changePage = (id) => {
    setCurrentPage(id)
  }

  let [shortt, shortfilter] = useState(data);

  function shorkfilter1() {
    setCount("");
    let short = data.sort((a, b) => a.id - b.id)
    shortfilter([...short])
  }

  function latestfilter() {
    shorkfilter1();
    setCount("latest product")
  }

  function pricefilter() {
    setCount("")
    let lowproduct = data.sort((a, b) => a.price2 - b.price2)
    shortfilter([...lowproduct])
  }

  function highfilter() {
    setCount("")
    let highproduct = data.sort((a, b) => b.Price - a.Price)
    shortfilter([...highproduct])
  }

  const [count1, setCount1] = useState("");

  function sortOne(price, Price2) {
    setCount(price)
    setCount1(Price2)
  }

  return (
    <>
      <div className='max-w-[1120px] m-auto border-[1px] border-[#ababab] h-auto mt-[200px]  pb-2'>
        <div className='flex justify-between'>
          <div className='ms-[35px] mt-[20px]'>
            <p className='text-[18px]'>Showing 1–9 of 27 results</p>
          </div>

          <div className='flex'>
            <div>
              <i class="fa-solid fa-table-cells-large text-[25px] text-[#f50963] me-[20px] mt-[20px]"></i>

            </div>

            <div>
              <i class="fa-solid fa-bars text-[25px] text-[#ababab] me-[-20px] mt-[20px]"></i>
            </div>


            <div className='w-[200px] ms-10  me-[35px] mt-[15px] '>
              <details className='group'>
                <summary className='flex justify-between border-2 h-auto'>
                  <span className='ms-1 text-[17px] mt-1'>Short Filter</span>
                  <span className='group-open:rotate-90 mt-1'>
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <ul>
                  <li onClick={shorkfilter1} className='mb-1 cursor-pointer text-[16px] ms-1'>Short Filter</li>
                  <li onClick={latestfilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Latest Product</li>
                  <li onClick={pricefilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Price low to high</li>
                  <li onClick={highfilter} className='mb-1 cursor-pointer text-[16px] ms-1'>Price high to low</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>



      <div className='flex justify-between xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] flex-wrap'>
        <div>
          <div className='mt-[90px] w-[300px]'>
            <details className='group transition-1000'>
              <summary className='flex justify-between transition-1000'>
                <span className='ipad text-[19px] text-[#232323]'>Ipad Phone & Tablets</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li onClick={() => setCount("phone")} className='ms-5 decimal marker:text-[20px]'><a href='#'>Phone</a></li>
                <li onClick={() => setCount("tablet")} className='ms-5 decimal marker:text-[20px]'><a href='#'>Teblet</a></li>
                <li onClick={() => setCount("phone")} className='ms-5 decimal marker:text-[20px]'><a href='#'>IPad</a></li>
              </ul>
            </details>

          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Planer & Virtual</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Planer</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Virtual</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Spinning Reel & Kettle</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Spinning-Reel</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Kettle</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Computers Monitor & Laptop</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Computers</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Leptop</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Monitor</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Exercise Bike & Shaver Clean</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Exercise-Bike</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Shaver-Clean</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Wireless & Watches</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Wireless</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Watch</a></li>
              </ul>
            </details>
          </div>

          <div className='mt-1 w-[300px] '>
            <details className='group'>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Camera Bluetooth & Headset</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <ul className='list-disc'>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Camera</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Bluetooth</a></li>
                <li className='ms-5 decimal marker:text-[20px]'><a href='#'>Headset</a></li>
              </ul>
            </details>
          </div>

          <div className='w-[300px] mt-12'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Brands</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <hr></hr>
              <input type='search' className='border-2 py-2 px-3 w-[300px] mt-3' placeholder='Search Brands' />
              <div className='h-[120px] overflow-auto mt-8'>
                <input onClick={() => setCount("sony")} type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>Sony</span><br />
                <input onClick={() => setCount("logitech")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Logitech</span><br />
                <input onClick={() => setCount("samsung")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Samsung</span><br />
                <input onClick={() => setCount("apple")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Apple</span><br />
                <input onClick={() => setCount("deepcool")} type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Deepcool</span>
              </div>
            </details>
          </div>

          <div className='w-[300px] mt-12'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Colors</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>  
                </span>
              </summary>
              <hr></hr> 
              <div className='h-[150px] overflow-auto mt-8'>
                <input type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>Green</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Orenge</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Black</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Red</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Pink</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Gray</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Blue</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>Yellow</span>
              </div>
            </details>
          </div>

          <div className='w-[300px] mt-12'>
            <details className='group' open>
              <summary className='flex justify-between'>
                <span className='ipad text-[19px] text-[#232323]'>Price</span>
                <span className='group-open:rotate-90'>
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <hr></hr>
              <div className='h-[150px] overflow-auto mt-8'>
                <input onClick={() => sortOne(10.00, 49.00)} type='radio' name='brands' className='w-4 h-4 '></input><span className='ms-3 text-[16px]'>$10.00 - $49.00</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$50.00 - $99.00</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$100.00 - $199.00</span><br />
                <input type='radio' name='brands' className='w-4 h-4 mt-2'></input><span className='ms-3 text-[16px]'>$200 +</span>
              </div>
            </details>
          </div>

          <button onClick={() => setCount("")} className='bg-pink-500 text-white py-2 w-[300px] font-semibold hover:bg-indigo-500 hover:duration-300'>Reset Filter</button>

        </div>

        <div className='w-[800px] mt-9'>
          <div className='containerrr h-auto flex justify-between flex-wrap'>
            {
              count === "" && record.map(topratedd => {
                return (
                  <div class="one overflow-hidden">
                    <div class="card h-[300px] w-[260px]">
                      <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                      <div class="info">
                        <div class="one1 hover:bg-[#f50963] group">
                          <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one2 hover:bg-[#f50963] group">
                          <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one3 hover:bg-[#f50963]">
                          <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                      </div>
                      <div class="info1">
                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                      </div>
                    </div>
                    <p className='mt-4 text-[11px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                  </div>
                )
              })
            }

            {
              data.filter((el) => { return el.brand === count }).map(topratedd => {
                return (
                  <div class="one overflow-hidden">
                    <div class="card h-[300px] w-[260px]">
                      <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                      <div class="info">
                        <div class="one1 hover:bg-[#f50963] group">
                          <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one2 hover:bg-[#f50963] group">
                          <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one3 hover:bg-[#f50963]">
                          <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                      </div>
                      <div class="info1">
                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                      </div>
                    </div>
                    <p className='mt-4 text-[11px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                  </div>
                )
              })
            }
            {
              data.filter((el) => { return el.categaty === count }).map(topratedd => {
                return (
                  <div class="one overflow-hidden">
                    <div class="card h-[300px] w-[260px]">
                      <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                      <div class="info">
                        <div class="one1 hover:bg-[#f50963] group">
                          <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one2 hover:bg-[#f50963] group">
                          <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one3 hover:bg-[#f50963]">
                          <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                      </div>
                      <div class="info1">
                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                      </div>
                    </div>
                    <p className='mt-4 text-[11px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                  </div>
                )
              })
            }
            {
              data.filter((el) => { return el.type === count }).map(topratedd => {
                return (
                  <div class="one overflow-hidden">
                    <div class="card h-[300px] w-[260px]">
                      <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                      <div class="info">
                        <div class="one1 hover:bg-[#f50963] group">
                          <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one2 hover:bg-[#f50963] group">
                          <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one3 hover:bg-[#f50963]">
                          <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                      </div>
                      <div class="info1">
                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                      </div>
                    </div>
                    <p className='mt-4 text-[11px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                  </div>
                )
              })
            }
            {
              data.filter((el) => { return el.Price >= count && el.price2 <= count1 }).map(topratedd => {
                return (
                  <div class="one overflow-hidden">
                    <div class="card h-[300px] w-[260px]">
                      <img src={topratedd.image} alt="Not Show" class="ss cursor-pointer" style={{ height: "300px" }} />
                      <div class="info">
                        <div class="one1 hover:bg-[#f50963] group">
                          <i onClick={() => dispatch(addTowish(topratedd))} class="fa-regular fa-heart text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one2 hover:bg-[#f50963] group">
                          <i class="fa-regular fa-eye text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                        <div class="one3 hover:bg-[#f50963]">
                          <i class="fa-solid fa-link text-[20px] ms-2 mt-2 group-hover:text-white"></i>
                        </div>
                      </div>
                      <div class="info1">
                        <button onClick={() => dispatch(addToCart(topratedd))} class="w-[255px] h-[35px] bg-black text-white mt-[83px] ml-[-250px] hover:bg-[#f50963]">ADD TO CART</button>
                      </div>
                    </div>
                    <p className='mt-4 text-[11px]'>{topratedd.Name}</p>
                    <p className="text-gray-700 mt-1"><del>{topratedd.Delprice}</del> {topratedd.Price}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <nav className='mt-10'>
        <ul className='flex justify-center gap-3'>
          <li onClick={previousPage} className='cursor-pointer border px-4 py-2 hover:bg-pink-500 hover:text-white'>
            <a className=''>
              <i className="fa-solid fa-arrow-left"></i>  Previous
            </a>
          </li>
          {numbers.map((pgPage, i) => (
            <li key={i} onClick={() => changePage(pgPage)} className={`${currentPage === pgPage ? 'active' : ''} cursor-pointer page border px-4 py-2 hover:bg-pink-500 hover:text-white`} >
              <a className=''>
                {pgPage}
              </a>
            </li>
          ))}
          <li onClick={nextPage} className='cursor-pointer border px-4 py-2 hover:bg-pink-500 hover:text-white'>
            <a className=''>
              Next <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sec1
