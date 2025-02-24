import React from 'react'
// import './Header.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import userIcon from '../../Assets/icons8-user-100.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-20 text-white text-base font-bold bg-gradient-to-b from-[#2B1552] to [#23B1B27]'>
        <h1 className="uppercase text-[32px] text-[#C42F44] w-40 text-center cursor-pointer select-none">READ3</h1>
        <p className='cursor-pointer text-xl'>Mới nhất</p>
        <p className='cursor-pointer text-xl'>Phổ biến</p>
        <div className='h-[30px] bg-transparent flex justify-between items-center cursor-pointer'>
            <p className='text-xl'>Thể loại</p>
            <IoIosArrowDown className='m-2.5'/>
        </div>
        <div className="flex justify-between items-center w-xl bg-[#d9d9d9] rounded-4xl border-4 border-[rgba(196,47,68,0.4)] h-12.5">
            <input className='h-7.5 w-85 ml-5 bg-transparent border-transparent outline-none text-base placeholder-red-300 text-rose-600' type="text" placeholder='Bạn muốn tìm truyện gì?' />
            <div className="flex justify-center items-center w-7.5 h-7.5 rounded-full bg-[#c42f44] mx-2.5 cursor-pointer">
              <IoSearchOutline className="w-5 h-5 text-[#f3f3f3]"/>
            </div>
        </div>
        <MdOutlineLightMode className="w-10 h-10 cursor-pointer" />
        <img src={userIcon} alt="" className="w-16 h-16 m-5 cursor-pointer" />
    </div>
  )
}

export default Header