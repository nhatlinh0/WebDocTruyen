import React from 'react'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import instagram from "../../Assets/instagram-icon.png";
import gmail from "../../Assets/gmail-icon.png";

const Footer = () => {
  return (
    <div className='flex flex-col justify-around items-center h-110 mt-12 bg-gradient-to-b from-[#231B27] to-[#C42F44]'>
        <h1 className='text-[#C42F44] text-3xl font-bold uppercase'>Read3</h1>
        <p className='text-2xl font-bold text-white'>Kết nối với chúng tôi</p>
        <div className='flex space-x-12'>
          <BiLogoFacebookCircle className='text-[#0866FF] text-5xl cursor-pointer'/>
          <FaDiscord className='text-[#5865F2] text-5xl cursor-pointer'/>
          <img src={instagram} alt="" width={48} height={48} className='cursor-pointer'/>
          <img src={gmail} alt="" width={48} height={48} className='cursor-pointer'/>
        </div>
        <ul className='flex space-x-10'>
          <li className='text-base text-white font-bold cursor-pointer'>Về chúng tôi</li>
          <li className='text-base text-white font-bold cursor-pointer'>Quyền riêng tư</li>
          <li className='text-base text-white font-bold cursor-pointer'>Chính sách bảo mật</li>
          <li className='text-base text-white font-bold cursor-pointer'>Điều khoản</li>
          <li className='text-base text-white font-bold cursor-pointer'>Quản lý nội dung</li>
        </ul>
        <p className='text-white'>Copyright © 2025 Read3</p>
    </div>
  )
}

export default Footer