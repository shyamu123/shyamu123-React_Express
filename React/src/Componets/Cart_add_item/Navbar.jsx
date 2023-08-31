import React from 'react'

const Navbar = (Props) => {

    return (
        <>
            <div className='container'>
                {/* This is an example component */}
                <div className="flex justify-center items-center h-[50px] bg-yellow-300">
                    Add Item : {Props.Count}
        
                </div>
            </div>
        </>

    )
}

export default Navbar
