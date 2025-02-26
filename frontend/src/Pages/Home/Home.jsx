
import Slider from '../../Components/Slider/Slider'
import Session from '../../Components/Session/Session'
import ComicItem from '../../Components/ComicItem/ComicItem'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import Introduce from '../../Components/Introduce/Introduce'
import OtherItem from '../../Components/OtherItem/OtherItem'
import { useContext } from 'react'
import { ComicContext } from '../../Context/ComicContext'


const Home = () => {
  const {truyenDeXuat, truyenKhamPha, truyenMoi} = useContext(ComicContext);

  return (
    <div>
        <Slider/>
        <Session title="Truyện đề xuất">
          {truyenDeXuat.map((item,i) => {
            return <ComicItem key={i} id={item.id} img={item.img} name={item.name} chapter={item.chapter} rate={item.rate}/>
          })}
        </Session>
        <Session title="Truyện mới cập nhật">
          {truyenMoi.map((item,i) => {
            return <ComicItem key={i} id={item.id} img={item.img} name={item.name} chapter={item.chapter} rate={item.rate}/>
          })}
        </Session>
        <Session title="Khám phá theo sở thích">
          {truyenKhamPha.map((item,i) => {
            return <CategoryItem key={i} id={item.id} img={item.img} name={item.name} desc={item.desc}/>
          })}
          <OtherItem/>
        </Session>
        <Introduce/>
    </div>
  )
}

export default Home