import React, { useContext } from "react";
import { ComicContext } from "../../Context/ComicContext";
import { useParams } from "react-router-dom";
import ComicDisplay from "../../Components/ComicDisplay/ComicDisplay";
import ChapterList from "../../Components/ChapterList/ChapterList";
import Session from "../../Components/Session/Session";
import ComicItem from "../../Components/ComicItem/ComicItem";

const Comic = () => {
  const { allComics } = useContext(ComicContext);
  const { comicId } = useParams();
  const comic = allComics.find((item) => item.id === Number(comicId));

  return (
    <div className="mt-10">
      <ComicDisplay comic={comic} />
      <ChapterList comicId={comic.id} />
      <Session title="Truyện liên quan">
        {allComics.map((item, i) => (
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
