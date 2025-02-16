import React from 'react'
import './Slider.css'

import image from '../../Assets/kagurabachi-slider.jpg'

const Slider = () => {
  return (
    <div className='slider'>
        <div className="slider-container">
            <img src={image} alt="" className="slider-img" />
            <div className="slider-wrap">
                <div className="slider-title">
                    <h1 className='title-text'>Nổi bật</h1>
                    <div className="wrap-dot">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <h1 className="slider-name">Kagurabachi</h1>
                <p className="slider-description">Chihiro, con trai của một thợ rèn huyền thoại, sống yên bình cho đến khi bi kịch ập đến, cướp đi tất cả. Cầm thanh kiếm cuối cùng của cha, cậu lao vào hành trình báo thù, đối mặt với những kẻ thù tàn ác và bí ẩn đằng sau thanh kiếm huyền thoại.</p>
                <div className="btn-wrap">
                    <div className="temp"></div>
                    <div className="slider-btn">
                        <h1 className='slider-read'>Đọc ngay</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider