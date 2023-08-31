import Usecounter from './Usecounter'

const Custom = () => {

    const [count,increment,decrement]=Usecounter(0)
    
  return (
    <div>
      <div className='text-[35px]'>{count}</div>
      <button onClick={increment} className='text-[30px]'>+</button>
      <button onClick={decrement} className='text-[30px]'>-</button>
    </div>
  )
}

export default Custom
