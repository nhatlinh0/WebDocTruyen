import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sliderComic } = useContext(ComicContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderComic.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Chuyển đến slide được chọn
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderComic.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[400px] md:h-[500px] lg:h-160 w-full object-cover object-center"
            />
            {/* Box thông tin - responsive */}
            <div className="flex flex-col bg-black/70 md:bg-white/70 absolute bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 md:left-[15%] w-full md:w-[400px] lg:w-[450px] p-3 md:p-5 shadow-lg md:rounded-sm">
              <div className="flex justify-between items-center">
                <h1 className="uppercase text-sm md:text-xl font-bold text-white md:text-black">
                  {slide.category}
                </h1>
                <div className="hidden md:flex justify-center items-center">
                  {sliderComic.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 w-2 md:h-2.5 md:w-2.5 rounded-full border-1 border-[#c42f44] m-1 cursor-pointer transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#c42f44] scale-125"
                          : "bg-transparent hover:bg-[#c42f44]/50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-2 md:my-5 text-white md:text-black line-clamp-1 md:line-clamp-none">
                {slide.title}
              </h1>
              <p className="text-xs font-medium text-gray-200 md:text-gray-800 md:font-bold h-0 md:h-25 line-clamp-0 md:line-clamp-4 overflow-hidden">
                {slide.description}
              </p>
              <Link
                to={`/comic/${slide.comicId}`}
                className="self-start md:place-self-end mt-2 md:mt-0"
              >
                <div className="flex justify-center items-center h-8 md:h-10 px-4 md:w-42 rounded-lg md:rounded-2xl bg-[#c42f44] cursor-pointer hover:bg-[#a12837] hover:scale-105 duration-300 shadow-md">
                  <h1 className="text-sm md:text-xl font-bold uppercase text-white text-center">
                    Đọc ngay
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators cho mobile */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex md:hidden justify-center items-center z-20 bg-black/30 px-3 py-1.5 rounded-full">
        {sliderComic.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full m-1 cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          ></div>
        ))}
      </div>

      {/* Nút chuyển slide - responsive */}
      <button
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/30 text-white p-2 md:p-3 rounded-full hover:bg-black/50 transition-all duration-300 hidden md:block"
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + sliderComic.length) % sliderComic.length
          )
        }
      >
        <FiChevronLeft className="text-xl md:text-2xl" />
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/30 text-white p-2 md:p-3 rounded-full hover:bg-black/50 transition-all duration-300 hidden md:block"
        onClick={() => setCurrentSlide((currentSlide + 1) % sliderComic.length)}
      >
        <FiChevronRight className="text-xl md:text-2xl" />
      </button>

      {/* Swipe gesture areas for mobile */}
      <div
        className="absolute top-0 bottom-30 left-0 w-1/2 md:hidden"
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + sliderComic.length) % sliderComic.length
          )
        }
      ></div>
      <div
        className="absolute top-0 bottom-30 right-0 w-1/2 md:hidden"
        onClick={() => setCurrentSlide((currentSlide + 1) % sliderComic.length)}
      ></div>
    </div>
  );
};

export default Slider;
