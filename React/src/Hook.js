import React from 'react'
import { useState } from 'react'
// import data from './Data.json'
import data from './Filters.json'

const Hook = () => {

  // console.log(useState());
  let a = ["Vinit Karnik", "Ruskin Bond"];

  const [nData, setData] = useState(data);
  const handleclick = () => {
    setData([]);
  }

  const handleclickremove = (itemId) => {
    setData(nData.filter(item => item.id !== itemId))
  }

  return (
    <div>
      <div className='flex justify-center'>
        <button onClick={handleclick} class="mb-2 mt-2 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">Clear All Item
        </button>
      </div>  
        {a.map((elm) => {
          return (
            <ul>
              <li>
                <div>
                  <div class="flex flex-col text-center">
                    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-slate-400 border-b">
                              <tr className=''>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Author
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Country
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Language
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Pages
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Title
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Year
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Img
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                  Remove
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                nData.filter((el) => { return (el.author === elm) }).map(items =>

                                  <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{items.author}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {items.country}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {items.language}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {items.pages}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {items.title}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {items.year}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <img src={items.img} className='h-[100px] w-[100px]' alt='NOT'></img>
                                    </td>
                                    <td>
                                      <button onClick={() => handleclickremove(items.id)} class="mb-2 mt-2 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">Remove</button>
                                    </td>
                                  </tr>
                                )
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          )
        })
        }
      </div>
  )
}

export default Hook