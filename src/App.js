import React from 'react'

// const iteamlist=["car","bus"];
// const find=iteamlist.includes("bus");

// function List({item,status,isstock}){
//   // if(isstock){
//   //   return(
//   //     <li>{item}</li>
//   //   )
//   // }
//   // return <li>{status}</li>

//   return(
//     <li>
//       {isstock ? <ins> {item } </ins>:<del>{status}</del>}
//     </li>
//   )
// }

let A=()=>{
  return (  
    <div className="mt-3 max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="" src="https://img.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg?w=2000" style={{height:"200px",width:"350px"}} alt=""/>
      <div className="">
        <p className='text-center'>PIZZA</p>
        <p className='text-[25px] ms-2'>10 Most Popular Types of Pizza Around the Country</p>
        <ul className='list-disc text-[20px]'>
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
  )
}

let B=()=>{
  return(
    <div className="mt-3 max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="" src="https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" style={{height:"200px",width:"350px"}} alt=""/>
      <div className="">
        <p className='text-center'>BURGER</p>
        <p className='text-[25px] ms-2'>10 Most Popular Types of burger Around the Country</p>
        <ul className='list-disc text-[20px]'>
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
  )
}

let Hello=({aa,bb,isstock})=>{
  switch(isstock){
    case "pizza":
      return (<h1>{aa}</h1>)
    case "bur":
      return (<h1>{bb}</h1>)
    default :
      return (<h1>Not Found</h1>)
  }
}

const App = () => {
  return (
    <>
      <div>
        <ul>
          <Hello aa={A()} bb={B()} isstock="bur"/>        
        </ul>
      </div>
      </>
      )
    }
    
    export default App
    // <List item="iteam in stock" status="item out of stock" isstock={find}/>
    

    
    
    
    