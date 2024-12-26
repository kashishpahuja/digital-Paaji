import React from 'react'

function Zigzag() {
  return (
    <div className='bg-[#cc5f4d]'>
        <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-32 xl:mx-56'>
            <div className='flex items-center justify-center gap-2 '>
                <div>
                    <img src="/Images/zigzag/1.webp" alt="" className='zoom w-32 h-24'/>
                </div>
                <div >
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 '>
                <div>
                    <img src="/Images/zigzag/2.webp" alt="" className='zoom w-32 h-24'/>
                </div>
                <div >
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div><div className='flex items-center justify-center gap-2 '>
                <div>
                    <img src="/Images/zigzag/3.webp" alt="" className='zoom w-32 h-24'/>
                </div>
                <div >
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div><div className='flex items-center justify-center gap-2 '>
                <div>
                    <img src="/Images/zigzag/1.webp" alt="" className='zoom w-32 h-24'/>
                </div>
                <div >
                    <h3 className='text-white text-2xl font-bold'>Creative Expression</h3>
                    <p className='text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Zigzag