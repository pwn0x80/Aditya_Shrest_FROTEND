import React from 'react'
import { Card } from '../../components/Card/Card'
export const TaskList = (props: {}) => {
  return (
    <div>
      <div className={` h-[30vh] bg-[url(https://files.catbox.moe/geukbz.png)]`}>


      </div>
      <div className='mx-auto max-w-full sm:max-w-[90%]'>
        <div className='py-2'>
          <button className='bg-orange-400 px-3 py-1  rounded text-white text-sm font-extrabold'>Add Task</button>
        </div>
        <div className='bg-[#f9f9ff] rounded-md p-4 '>
          <div className='flex gap-4 flex-wrap '>
            {[1, 2, 3, 4].map(() => (
              <div className='no-scrollbar drop-shadow-2xl  p-2 rounded-md h-[90vh] overflow-auto'>
                <div className='drop-shadow-md text-sm capitalize font-bold sticky z-10 top-0 bg-white rounded-md py-1 px-1'>
                  <span> Todo</span>
                </div>
                <div className='py-3'>
                  <Card />
                </div>
                <div className='py-3'>
                  <Card />
                </div>
                <div className='py-3'>
                  <Card />
                </div>
                <div className='py-3'>
                  <Card />
                </div>

                <div className='py-3'>
                  <Card />
                </div>

                <div className='py-3'>
                  <Card />
                </div>

                <div className='py-3'>
                  <Card />
                </div>

              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
