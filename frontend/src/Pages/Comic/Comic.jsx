import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import { useParams } from "react-router-dom";
import ComicDisplay from "../../Components/ComicDisplay/ComicDisplay";
import ChapterList from "../../Components/ChapterList/ChapterList";
import Session from "../../Components/Session/Session";
import ComicItem from "../../Components/ComicItem/ComicItem";
import Comment from "../../Components/Comment/Comment";

const Comic = () => {
  const { allComics } = useContext(ComicContext);
  const { comicId } = useParams();
  const comic = allComics.find((item) => item.id === Number(comicId));

  const relatedComics = allComics
    .filter((item) => {
      if (!item || !comic) return false;
      if (item.id === comic.id) return false;
      return item.category.some((cat) => comic.category.includes(cat));
    })
    .slice(0, 8);

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
            img={item.img}
            name={item.name}
            chapter={item.chapter}
            rate={item.rate}
          ></ComicItem>
        ))}
      </Session>
    </div>
  );
};

export default Comic;
