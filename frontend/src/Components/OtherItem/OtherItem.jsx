import React from 'react'
import other from "../../Assets/other-cover.webp";

const OtherItem = () => {
  return (
    <div className='cursor-pointer relative group '>
        <div className="cursor-pointer relative w-[285px] h-[350px] group-hover:scale-105 duration-300">
          <img src={other} alt="" className="rounded-2xl w-full h-full object-cover "/>
          <div className="absolute inset-0 bg-[#2F86C4] opacity-80 rounded-2xl duration-300 group-hover:opacity-50"></div>
          <h1 className="absolute top-1/2 -translate-y-1/2 left-7 right-7 text-white font-bold text-3xl duration-300 group-hover:scale-105">Xem tất cả thể loại</h1>
        </div>
    </div>
  )
}

export default OtherItem