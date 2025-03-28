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
  const { truyenDeXuat, allCategory, truyenMoi, allComics, isLoading } =
    useContext(ComicContext);
  if (isLoading) {
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải ...</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Slider />
      <Session title="Truyện đề xuất" more type="popular">
        {allComics.map((item, i) => {
          return (
            <ComicItem
              key={i}
              id={item.id}
              img={"https://newphim.online/" + item.img}
              // img={item.img}
              name={item.name}
              chapter={item.chapter_number}
              rate={item.rate}
            />
          );
        })}
      </Session>
      <Session title="Truyện mới cập nhật" more type="newest">
        {truyenMoi.slice(0, 8).map((item, i) => {
          return (
            <ComicItem
              key={i}
              id={item.id}
              // img={item.img}
              img={"https://newphim.online/" + item.img}
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
              img={"https://newphim.online/" + item.img}
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
