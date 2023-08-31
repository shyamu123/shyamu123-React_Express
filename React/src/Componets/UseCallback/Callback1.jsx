import React from 'react'

const Callback1 = (One,count) => {
    console.warn("One");
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Callback1)
