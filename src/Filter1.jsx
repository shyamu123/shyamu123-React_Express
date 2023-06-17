import React from 'react'

const Filter1 = (props) => {
  let { author, country, language, pages, title, year, img } = props;
  return (
    <>

      <tr className='border-1'>
        <td class="whitespace-nowrap px-6 py-4 border-1">{author}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1">{country}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1">{language}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1">{pages}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1">{title}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1">{year}</td>
        <td class="whitespace-nowrap px-6 py-4 border-1"><img src={img} height={"100px"} width={"80px"} alt=""/></td>
      </tr>

    </>
  )
}

export default Filter1

// <div className=''>
      //   <a href="#" className="mt-3 ml-3 mb-3  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row   md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      //       <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="" src={img} />
      //       <div className="flex flex-col justify-between p-4 leading-normal">
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Author:</b>{author}</p>
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Country:</b>{country}</p>
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Language:</b>{language}</p>
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Pages:</b>{pages}</p>
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Title:</b>{title}</p>
      //         <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'><b>Year:</b>{year}</p>
      //       </div>
      //   </a>
      // </div>






