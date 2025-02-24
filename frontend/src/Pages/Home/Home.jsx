import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Session from '../../Components/Session/Session'
import ComicItem from '../../Components/ComicItem/ComicItem'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import Introduce from '../../Components/Introduce/Introduce'

const Home = () => {
  return (
    <div>
        <Slider/>
        <Session title="Truyện đề xuất">
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
        </Session>
        <Session title="Truyện mới cập nhật">
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          <ComicItem/>
          </Session>
        <Session title="Khám phá theo sở thích">
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </Session>
        <Introduce/>
    </div>
  )
}

export default Home