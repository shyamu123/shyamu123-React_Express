import React from 'react'
import Book from './Book'
import shyam from './shyam.json'


const Booklist = () => {
  return (
    <>
    {shyam.map((ele)=>{
        return(
            <Book UserId={ele.userId} Id={ele.id} Title={ele.title} Completed={ele.completed}/>
        )
    })}
    </>
  )
}

export default Booklist
