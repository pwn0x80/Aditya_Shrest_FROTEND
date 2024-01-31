
import React from 'react'
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey" className="w-5 h-5 rotate-[240deg]">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z" clipRule="evenodd" />
  </svg>
)
const StartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-[darkorange] w-4 h-4 inline">
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
  </svg>
)

export const Card = (props: {}) => {
  return (
    <div className='hover:scale-105
      flex justify-between flex-col bg-orange-200 px-3 py-2 drop-shadow-md rounded-md w-[15rem] h-[10em]'>
      <div>
        <div className='flex items-center justify-between pb-3'>
          <div className='text-xs flex gap-x-1 items-center'>
            <StartIcon />
            <span className=' font-bold'> Today</span>
          </div>
          <ArrowIcon />
        </div>

        <div className='font-light text-sm line-clamp-1' >Title </div>
        <span className='text-md line-clamp-3 tracking-wide'>
          React Todo Application...
          React Todo Application...
          React Todo Application...
        </span>
      </div>
      <div className='text-xs text-right italic'>completed else.. </div>
    </div>
  )
}