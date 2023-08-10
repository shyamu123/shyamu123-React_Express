import React, { createContext } from 'react'
import Task2 from './Task2'
const data = createContext();
const Task1 = () => {

  // const Name="Shyamu";
  // const Surname="Rabadiya";

  let obj1=[
    {name:"Shyamu"},
    {name1:"Shyamu1"},
    {name2:"Shyamu2"}
  ]

  return (
    <div>
        <h1>Task 1</h1>
        <data.Provider value={obj1}>
          <Task2/>
        </data.Provider>
    </div>
  )
}

export default Task1
export {data};