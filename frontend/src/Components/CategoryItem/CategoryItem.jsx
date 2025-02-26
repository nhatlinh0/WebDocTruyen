import React from 'react'

const CategoryItem = (props) => {
  return (
    <div className='cursor-pointer relative group'>
        <div className="cursor-pointer relative w-[285px] h-[350px] ">
          <img src={props.img} alt="" className="rounded-2xl w-full h-full object-cover duration-300 group-hover:brightness-75" />
          <div className="absolute inset-0 bg-[#c42f44] opacity-80 rounded-2xl duration-300 group-hover:opacity-60"></div>
          <h1 className="absolute top-14 left-7 right-7 text-white font-bold text-3xl duration-300 group-hover:scale-105 ">{props.name}</h1>
          <p className="absolute bottom-10 left-7 right-7 text-sm text-white duration-300 group-hover:translate-y-[-3px]">{props.desc}</p>
      </div>
    </div>
  )
}

export default CategoryItem