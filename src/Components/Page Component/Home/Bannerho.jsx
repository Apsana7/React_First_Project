import React from 'react'

const Bannerho = () => {
   
  return (
    <>
    <div className=' flex flex-row gap-12 px-10 m-10 justify-between '>
      
            <div className=' h-96 w-96 relative'>
                <img src="/image5.jpg"  className='h-full w-full object-cover' />
                <div className='absolute w-full flex items-center justify-center bottom-0 left-0 bg-opacity-50 text-white font-bold text-3xl p-4'>Men's Fashion</div>
                {/* <div>shop now</div> */}
            </div>

            <div className='h-96 w-96 relative'>
                <img src="/image7.jpg"className='h-full w-full object-cover'/>
                <p className='absolute w-full flex  bottom-0 items-center justify-center bg-opacity-50 text-white font-bold  text-3xl p-5'>Women's Fashion</p>
            </div>

            <div className='h-96 w-96 relative'>
                <img src="/image10.jpeg" alt="" className='h-full w-full object-cover' />
                <p className='absolute w-full flex bottom-0  items-center justify-center bg-opacity-50 text-white text-3xl font-bold p-5'>Baby Fashion</p>
            </div>
       
    </div>
    </>
  )
}

export default Bannerho
