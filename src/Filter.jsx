import React from 'react'
import filters from './Filters.json'
import Filter1 from './Filter1'


const Filter = () => {
  var form="Dr Sreeram Chauliahas";
  return (
    <>
      {
        filters.filter((elem)=>{return form === elem.author}).map((elem)=>{
          return(
            <Filter1 author={elem.author} country={elem.country} language={elem.language} pages={elem.pages} title={elem.title} year={elem.year} img={elem.img}/>
          )
        })
      }
    </>
  )
}

export default Filter
