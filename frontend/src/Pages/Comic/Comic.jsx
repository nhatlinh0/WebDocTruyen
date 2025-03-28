import React, { useContext, useEffect, useState } from "react";
import { ComicContext } from "../../Context/ComicContext";
import { useParams } from "react-router-dom";
import ComicDisplay from "../../Components/ComicDisplay/ComicDisplay";
import ChapterList from "../../Components/ChapterList/ChapterList";
import Session from "../../Components/Session/Session";
import ComicItem from "../../Components/ComicItem/ComicItem";
import Comment from "../../Components/Comment/Comment";

const Comic = () => {
  const { comicId } = useParams();
  // const comic = allComics.find((item) => item.id == Number(comicId));
  const [comic, setComic] = useState(null);
  const [relatedComics, setRelatedComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://newphim.online/api/truyen-chu/${comicId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComic(data);
        setIsLoading(false);
      });
  }, [comicId]);

  useEffect(() => {
    if (comic?.category) {
      fetch(`https://newphim.online/api/categories/${comic.category}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRelatedComics(data.stories.filter((item) => item.id != comic.id));
          setIsLoading(false);
        });
    }
  }, [comic?.category]);

  if (isLoading) {
    return (
      <div className="bg-[#151018] rounded-3xl h-175 mx-25 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="w-10 h-10 border-4 border-t-[#C72F44] border-[#332B37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải...</p>
        </div>
      </div>
    );
  }
  // const relatedComics = allComics
  //   .filter((item) => {
  //     if (!item || !comic) return false;
  //     if (item.id === comic.id) return false;
  //     return item.category.some((cat) => comic.category.includes(cat));
  //   })
  //   .slice(0, 8);

  return (
    <div className="mt-10">
      <ComicDisplay comic={comic} />
      <ChapterList comicId={comic.id} comicSlug={comic.slug} />
      <Comment />
      <Session title="Truyện liên quan">
        {relatedComics.map((item, i) => (
          <ComicItem
            key={i}
            id={item.id}
            img={"https://newphim.online/" + item.img}
            name={item.name}
            chapter={item.chapter_number}
            rate={item.rate}
          ></ComicItem>
        ))}
      </Session>
    </div>
  );
};

export default Comic;
