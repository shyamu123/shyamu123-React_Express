import React from 'react'

const Expancesform = () => {
  return (
    <div>
    <form>
    <div>
      <div class="w-full px-3 sm:w-1/2 flex">
        <div class="mb-5">
          <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">Title</label>
          <input type="text" name="fName" id="fName" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">Amount</label>
          <input type="number" name="fName" id="fName"  min="1" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">Date </label>
          <input type="date" name="fName" id="fName" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
      </div>
    </div>
    <div>
      <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Add Expance
      </button>
    </div>
  </form>
    </div>
  )
}

export default Expancesform