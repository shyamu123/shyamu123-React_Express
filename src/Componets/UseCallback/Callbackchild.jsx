import React from 'react'

const Callbackchild = ({shyamu,count1}) => {
    console.warn("Child");
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Callbackchild)
