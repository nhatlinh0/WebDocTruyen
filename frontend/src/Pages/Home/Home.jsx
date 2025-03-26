import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Session from "../../Components/Session/Session";
import ComicItem from "../../Components/ComicItem/ComicItem";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import Introduce from "../../Components/Introduce/Introduce";
import OtherItem from "../../Components/OtherItem/OtherItem";
import { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import WebCard from "../../Components/WebCard/WebCard";

const Home = () => {
  const { truyenDeXuat, allCategory, truyenMoi } = useContext(ComicContext);

  return (
    <div>
      <Slider />
      <Session title="Truyện đề xuất" more type="popular">
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
      <Session title="Truyện mới cập nhật" more type="newest">
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
      <h1 className="text-white text-center font-bold text-3xl mb-10 mt-50">
        Bước vào thế giới của những câu chuyện không giới hạn ngay tại đây!
      </h1>
      <Introduce />
      <WebCard />
    </div>
  );
};

export default Home;
