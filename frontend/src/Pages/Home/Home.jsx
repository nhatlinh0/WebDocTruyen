import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Session from "../../Components/Session/Session";
import ComicItem from "../../Components/ComicItem/ComicItem";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import Introduce from "../../Components/Introduce/Introduce";
import OtherItem from "../../Components/OtherItem/OtherItem";
import { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";

const Home = () => {
  const { truyenDeXuat, allCategory, truyenMoi } = useContext(ComicContext);

  return (
    <div>
      <Slider />
      <Session title="Truyện đề xuất" more>
        {truyenDeXuat.map((item, i) => {
          return (
            <ComicItem
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              chapter={item.chapter}
              rate={item.rate}
            />
          );
        })}
      </Session>
      <Session title="Truyện mới cập nhật" more>
        {truyenMoi.map((item, i) => {
          return (
            <ComicItem
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              chapter={item.chapter}
              rate={item.rate}
            />
          );
        })}
      </Session>
      <Session title="Khám phá theo sở thích">
        {allCategory.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              desc={item.desc}
            />
          );
        })}
        <Link to={"/allcategory"}>
          <OtherItem />
        </Link>
      </Session>
      <Introduce />
    </div>
  );
};

export default Home;
