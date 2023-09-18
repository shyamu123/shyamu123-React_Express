import React from 'react'
import './Sec2.css'
import aset_4 from '../../../assets/asset4.jpeg'
import aset_5 from '../../../assets/asset5.jpeg'
import aset_6 from '../../../assets/asset6.jpeg'
import aset_7 from '../../../assets/asset7.jpeg'


const Sec2 = () => {
    return (
        <>
            <div className='containerrr'>
                <div className='flex justify-between mt-[100px] mb-[100px]'>
                    <div className='h-[170px] w-[255px] bg-red-500'>
                        <img src={aset_4} alt='Not Show'></img>
                    </div>
                    <div className='h-[170px] w-[255px] bg-red-500'>
                        <img src={aset_5} alt='Not Show'></img>
                    </div>
                    <div className='h-[170px] w-[255px] bg-red-500'>
                        <img src={aset_6} alt='Not Show'></img>
                    </div>
                    <div className='h-[170px] w-[255px] bg-red-500'>
                        <img src={aset_7} alt='Not Show'></img>
                    </div>
                </div>
            </div>

            

            
        </>
    )
}

export default Sec2
