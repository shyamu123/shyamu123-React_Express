import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookAction from './BookAction'

const BookContainer = () => {
    
    const nofbooks = useSelector(state => state.NumberofBookes)

    const dispatch = useDispatch()

  return (
    <div>
      <p>BookContainer</p>
      <p>No Of Book {nofbooks}</p>
      <button onClick={()=>{dispatch(BookAction())}}>Buy_Book</button>
    </div>
  )
}

export default BookContainer
