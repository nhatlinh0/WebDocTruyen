import React from 'react'
import IntroImg from '../../Assets/img-intro.png'

const Introduce = () => {
  return (
    <div className='flex justify-center items-center gap-10 mx-50'>
        <div>
            <h1 className='text-white text-3xl font-bold mb-10'>Chào mừng bạn đến với <span className='text-[#C42F44]'>READ3</span> - thế giới truyện tranh đa dạng dành cho tất cả mọi người!</h1>
            <p className='text-white italic text-lg font-light'>Chúng tôi cung cấp kho truyện phong phú với nhiều thể loại hấp dẫn như: Action, Adventure, Fantasy, Manhwa, Manhua, Manga, Ngôn Tình, Hài Hước, Kinh Dị, Trinh Thám,... được cập nhật liên tục
                <span className='text-[#C42F44]'> mỗi ngày.</span></p>
        </div>
        <img src={IntroImg} alt="" className='w-[426px] h-[462]'/>
    </div>
  )
}

export default Introduce