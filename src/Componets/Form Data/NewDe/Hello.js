import React from 'react'
import './Hello.css';

const Hello = () => {
  return (
    <>
    <div className='part1 bg-white shadow-2xl'>
        <div className='p-4 mt-5 flex justify-between items-center'>
            <div>
                <button className='text-4xl text-blue-400'>Products</button>
            </div>
            
            <div>
                <a href="#_" class="inline-flex items-center justify-center pt-1 pb-1 ps-2 pe-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">Add Products</a>
            </div>
        </div>
    
        <div className='ms-4'>
            <input type='text' placeholder='Search' className='a1 w-[500px] p-1'></input>
        </div>

        <div className='flex ms-4 mt-4 max-w-[240px] justify-between'>
            <div>
                <a href="#_" class="inline-flex items-center justify-center pt-1 pb-1 ps-2 pe-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">All Products</a>
            </div>

            <div>
                <a href="#_" class="inline-flex items-center justify-center pt-1 pb-1 ps-2 pe-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">Most popular</a>
            </div>
        </div>

        <div className='ps-4 pe-2'>
            <table className='w-full table-fixed mt-4 border'>
                <thead className='border'>
                    <th className='w-[400px]'>Products</th>
                    <th className='border'>Type</th>
                    <th className='border'>levenlary</th>
                    <th className='border'>price</th>
                </thead>

                <tbody className='border'>
                    <tr>
                        <th className='border'>beginner</th>
                        <th className='border'>Couse</th>
                        <th className='border'>25</th>
                        <th className='border'>$99.00</th>
                    </tr>
                    <tr>
                        <th className='border'>beginner</th>
                        <th className='border'>Couse</th>
                        <th className='border'>25</th>
                        <th className='border'>$99.00</th>
                    </tr>
                    <tr>
                        <th className='border'>beginner</th>
                        <th className='border'>Couse</th>
                        <th className='border'>25</th>
                        <th className='border'>$99.00</th>
                    </tr>
                    <tr>
                        <th className='border'>beginner</th>
                        <th className='border'>Couse</th>
                        <th className='border'>25</th>
                        <th className='border'>$99.00</th>
                    </tr>
                    <tr>
                        <th className='border'>beginner</th>
                        <th className='border'>Couse</th>
                        <th className='border'>25</th>
                        <th className='border'>$99.00</th>
                    </tr>

                </tbody>
            </table>
        </div>
        <br></br>
    </div>
    
    </>
  )
}

export default Hello
