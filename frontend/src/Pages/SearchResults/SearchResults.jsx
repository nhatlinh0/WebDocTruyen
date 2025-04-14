import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const SearchResults = () => {
  const location = useLocation();
  const { allComics } = useContext(ComicContext);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lấy query string từ URL
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q") || "";

    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    // Tìm kiếm truyện dựa trên query
    const results = allComics.filter((comic) =>
      comic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setIsLoading(false);
  }, [location.search, allComics]);

  return (
    <div className="min-h-screen bg-[#231B27] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
        Kết quả tìm kiếm
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-t-2 border-b-2 border-[#C42F44]"></div>
        </div>
      ) : (
        <>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Tìm thấy {searchResults.length} kết quả cho{" "}
            <span className="text-[#C42F44] font-semibold">
              "{new URLSearchParams(location.search).get("q")}"
            </span>
          </p>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {searchResults.map((comic, index) => (
                <ComicItem
                  key={index}
                  id={comic.id}
                  img={"https://newphim.online/" + comic.img}
                  name={comic.name}
                  chapter={comic.chapter_count}
                  rate={comic.rate}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 sm:py-16 md:py-20">
              <p className="text-lg sm:text-xl">
                Không tìm thấy truyện phù hợp với từ khóa của bạn
              </p>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-400">
                Hãy thử tìm kiếm với từ khóa khác hoặc duyệt theo thể loại
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
