import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center border border-b-blue-50 p-4'>

            <div className='flex gap-1 px-8 py-2'>
                
                <span className='text-xl font-medium text-white'>
                    Image 
            </span>
            <span className='text-xl font-medium text-blue-500'>App</span>
            </div>
           <div className='mr-8 py-2'>
            <button className='text-xl font-medium bg-yellow-700 text-white px-4 py-2 rounded  cursor-pointer scale-95'> Profile</button>
           </div>
        </div>
    )
}

export default Navbar
