import React from "react";
import Button from "./Task4";


function play1() {
  return (document.getElementById("result").innerHTML =`
  <div className="mt-3 ms-10 max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="" src="https://img.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg?w=2000" style={{height:"50px",width:"250px"}} alt=""/>
    <div className="">
      <p className='text-center text-[30px]'>PIZZA</p>
      <p className='text-[25px] ms-2'>10 Most Popular Types of Pizza Around the Country</p>
      <ul className='list-disc ms-8 mt-2 mb-2 text-[20px]'>
        <li>Veggie Pizza</li>
        <li>Pepperoni Pizza</li>
        <li>Meat Pizza</li>
        <li>Margherita Pizza</li>
        <li>BBQ Chicken Pizza</li>
        <li>Hawaiian Pizza</li>
        <li>Buffalo Pizza</li>
      </ul>
    </div>
  </div>
  `);
}

function pause1() {
  return (document.getElementById("result").innerHTML =`
  <div className="mt-3 ms-10 max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="" src="https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" style={{height:"100px",width:"350px"}} alt=""/>
    <div className="">
      <p className='text-center text-[30px]'>BURGER</p>
      <p className='text-[25px] ms-2'>10 Most Popular Types of burger Around the Country</p>
      <ul className='list-disc ms-8 mt-2 mb-2 text-[20px]'>
        <li>Veggie burger</li>
        <li>Pepperoni burger</li>
        <li>Meat burger</li>
        <li>Margherita burger</li>
        <li>BBQ Chicken burger</li>
        <li>Hawaiian burger</li>
        <li>Buffalo burger</li>
      </ul>
    </div>
  </div>
  `);
}

const Tasklist4 = () => {
  return (
    <div>
      <Button name="Touch me" onPlay={play1} onPause={pause1}></Button>
    </div>
  );
};

export default Tasklist4;
