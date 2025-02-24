import React from 'react'
import { MdStarRate } from "react-icons/md";
import rezero from '../../Assets/rezero-cover.jpg'

const ComicItem = (props) => {
  return (
    // <div>
    //     <img src={props.img} alt="" />
    //     <p>{props.name}</p>
    //     <p>{props.chapter}</p>
    //     <div className='flex'>
    //         <MdStarRate />
    //         <p>{props.rate}/5</p>
    //     </div>
    // </div>
    
    <div className='cursor-pointer'>
        <img src={rezero} alt="" width={285} height={350}/>
        <p className='text-2xl font-bold text-white'>Re:Zero</p>
        <p className='text-white text-lg font-light'>Chương 322</p>
        <div className='flex items-center'>
            <MdStarRate className='text-yellow-300'/>
            <p className='text-white text-xl font-bold'>4.5/5</p>
        </div>
    </div>
  )
}

export default ComicItem