import React from 'react'
import ExpanceData from './ExpancesData'
import Card from './Card';
import { useState } from 'react';

const Expanceitem = (props) => {

  const [newTitle , setNewTitle] = useState("");

  const [title , setTitle] = useState(props.title);
 
  const eventhandler = () =>{
     setTitle(newTitle);
  } 

  const changehandler = (event) =>{
    setNewTitle(event.target.value);
  }
   
  return (
    <>
      <Card >
        <div className='flex bg-slate-300 p-4 w-full justify-between items-center rounded-full mb-3'>
          <ExpanceData date={props.date}/>
          <div className='flex w-1/2 justify-around items-center'>
          <h2 className='text-xl text-white font-bold'>{title}</h2>
          <div className='text-md font-bold p-2 border-2 border-red-400 rounded-full w-24 text-center'>{props.amount}</div>
          <input type="text" value={newTitle} onChange={changehandler}/>
          <button className='border-2 border-white p-2' onClick={eventhandler}>Change Title</button>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Expanceitem