import React, { useState, useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";
import ComicItem from "../../Components/ComicItem/ComicItem";

const AllComics = (props) => {
  const { allComics } = useContext(ComicContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 20;

  //   const pageCount = Math.ceil(allComics.length / itemsPerPage);
  const pageCount = 10;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    fetch(`https://newphim.online/api/truyen-chu?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCurrentItems(data);
        }
      });
  }, [currentPage]);

  //   const offset = currentPage * itemsPerPage;
  //   const currentItems = allComics.slice(offset, offset + itemsPerPage);

  return (
    <div className="mx-4 md:mx-10 lg:mx-30 mb-12 md:mb-20">
      <div className="flex justify-between items-center my-6 md:my-8 lg:my-12">
        <h1 className="uppercase text-white text-lg md:text-2xl font-bold">
          {props.title}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-4 md:gap-6 lg:gap-y-10">
        {currentItems.map((item, i) => {
          return (
            <ComicItem
              key={i}
              id={item.id}
              img={"https://newphim.online/" + item.img}
              name={item.name}
              chapter={item.chapter_count}
              rate={item.rate}
            />
          );
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        previousLabel={"←"}
        nextLabel={"→"}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center gap-2 py-4"
        pageClassName="border border-gray-600 rounded"
        pageLinkClassName="block rounded px-3 py-1 text-white hover:bg-[#C72F44]"
        previousLinkClassName="block px-3 py-1 border rounded text-white hover:bg-gray-500"
        nextLinkClassName="block px-3 py-1 border rounded text-white hover:bg-gray-500"
        activeLinkClassName="bg-[#C72F44] text-white"
        breakClassName="text-white"
      />
    </div>
  );
};

export default AllComics;
