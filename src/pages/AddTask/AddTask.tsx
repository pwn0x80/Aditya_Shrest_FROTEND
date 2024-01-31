import React from 'react'

export const AddTask = (props: {}) => {
  return (
    <div>

      <div className='p-8 bg-gray-100 rounded-lg'>
     
        <div className='font-bold text-[#95006C] text-2xl font-mono'>
          Add Task
        </div>
        <div className='text-[#FFB548] text-sm italic underline'>
          Empower Your Productivity, One Task at a Time
        </div>
      </div>
      <div className='flex flex-col '>
        <div className='md:flex none flex-wrap gap-x-3'>

          <div className='mb-4'>
            <input type='text' placeholder='Title' className='w-full md:w-auto  p-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500' />
          </div>
          <div className='mb-4'>
            <input type='text' placeholder='Description' className='w-full md:w-auto  p-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500' />
          </div>
        </div>
        <div className='mb-4'>
          <input type='datetime-local' min={new Date().toISOString().slice(0, 16)} className='w-full md:w-auto p-2 border-b-2 border-gray-300 focus:outline-none focus:border-green-500' />
        </div>
        <div>
          <button className='font-bold text-sm bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
