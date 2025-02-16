import React from 'react'
import './Header.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import userIcon from '../../Assets/icons8-user-100.png'

const Header = () => {
  return (
    <div className='header'>
        <h1 className="header-logo">READ3</h1>
        <p className='header-newest'>Mới nhất</p>
        <p className='header-popular'>Phổ biến</p>
        <div className='header-wrap'>
            <p className='header-category'>Thể loại</p>
            <IoIosArrowDown className='arrow-down'/>
        </div>
        <div className="header-search">
            <input className='search-text' type="text" placeholder='Bạn muốn tìm truyện gì?' />
            <div className="search-btn">
              <IoSearchOutline className="search-icon"/>
            </div>
        </div>
        <MdOutlineLightMode className="header-lightmode" />
        <img src={userIcon} alt="" className="header-avatar" />
    </div>
  )
}

export default Header