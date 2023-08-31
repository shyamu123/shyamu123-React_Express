import React from 'react'
import {data} from './Task1'
const Task3 = () => {
  return (
    <div>   
      <data.Consumer>
      {
        (obj)=>{
          return(
              <div>
                <h1>{obj[0].name}</h1>
                <p>{obj[1].name1}</p>
              </div>
            )
          }
        }
      </data.Consumer>
    </div>
  )
}

export default Task3
