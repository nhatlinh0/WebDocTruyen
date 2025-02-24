import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Session = (props) => {
  return (
    <div className='mx-30 mb-20'>
        <div className="flex justify-between items-center my-12">
          <h1 className="uppercase text-white text-2xl font-bold">{props.title}</h1>
          <div className='flex items-center cursor-pointer'>
            <p className='text-xl font-bold text-white'>Xem thêm</p>
            <MdKeyboardArrowRight className='text-white text-2xl'/>
          </div>
        </div>

        <div className='grid grid-cols-4 justify-items-center gap-y-10'>
          {props.children}
        </div>
    </div>
  )
}

export default Session