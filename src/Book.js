import React from 'react'

const Book = (props) => {
    const{UserId,Id,Title,Completed}=props;
  return (
    <>
    <div className='inline-block border-[5px] ml-[10px] max-h-[100px] max-w-[100px] overflow-hidden mt-[5px] bg-green-400 border-yellow-300'>
      <div className=''>
        <p><b>UserId :</b>{UserId}</p>
        <p><b>Id :</b>{Id}</p>
        <p><b>Title :</b>{Title}</p>
        <p><b>Completed :</b>{Completed}</p>
      </div>
    </div>
    </>
  )
}

export default Book
