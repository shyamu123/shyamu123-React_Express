import React from 'react'

const Book = (props) => {
    const{UserId,Id,Title,Completed}=props;
  return (
    <div>
      <p><b>UserId :</b>{UserId}</p>
      <p><b>Id :</b>{Id}</p>
      <p><b>Title :</b>{Title}</p>
      <p><b>Completed :</b>{Completed}</p>
    </div>
  )
}

export default Book
