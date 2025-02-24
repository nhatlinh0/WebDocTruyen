import React from 'react'

const CategoryItem = () => {
  return (
    <div className='cursor-pointer relative'>
        <img src="" alt="" className='bg-black rounded-2xl' width={285} height={350}/>
        <h1 className='absolute top-13 text-white font-bold text-3xl mx-7'>Shounen</h1>
        <p className='absolute bottom-10 text-sm text-white mx-7'>Hành động, phiêu lưu dành cho nam trẻ tuổi</p>
    </div>
  )
}

export default CategoryItem