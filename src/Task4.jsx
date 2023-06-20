import React from 'react'

const Task4 = ({ name, onPlay, onPause}) => {
    let playing = false;
    function handleClick(){
        if(playing)
        {
            onPause()
        }
        else
        {
            onPlay()
        }

        playing = !playing;
    }
  return (
    <>
      <div className='flex justify-center'>
        <button onClick={handleClick} className='px-4 mt-5 ml-16 py-3 bg-yellow-400 text-black'>{name}</button>
      </div>
      <div id='result' className='w-[500px] shadow-2xl mx-auto my-10 leading-10'></div>
    </>
  )
}

export default Task4
