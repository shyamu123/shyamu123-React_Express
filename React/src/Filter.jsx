import React from 'react'
import filters from './Filters.json'
import Filter1 from './Filter1'

const Filter = () => {
  var form = ["Dr Sreeram Chauliahas"];
  return (
    <>
    <div className="flex justify-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="">
            <table className="text-center font-light table-fixed">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className='bg-black text-white'>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Author</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Country</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Language</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Pages</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Title</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Year</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Img</th>
                </tr>
              </thead>
            
              <tbody>
                {
                  filters.filter((elem) => { return form[0] === elem.author }).map((elem) => {
                    return (
                      <Filter1 author={elem.author} country={elem.country} language={elem.language} pages={elem.pages} title={elem.title} year={elem.year} img={elem.img} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="">
            <table className="text-center font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className='bg-black text-white'>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Author</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Country</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Language</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Pages</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Title</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Year</th>
                  <th class="border border-slate-600 px-6 py-4" scope="col">Img</th>
                </tr>
              </thead>
            
              <tbody>
                {
                  filters.filter((elem) => { return form[1] === elem.author }).map((elem) => {
                    return (
                      <Filter1 author={elem.author} country={elem.country} language={elem.language} pages={elem.pages} title={elem.title} year={elem.year} img={elem.img} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Filter