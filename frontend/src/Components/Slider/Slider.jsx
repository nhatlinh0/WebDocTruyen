import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ComicContext } from "../../Context/ComicContext";

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
              className="h-160 w-full object-cover object-bottom"
            />
            <div className="flex flex-col bg-white/70 absolute top-1/2 -translate-y-1/2 left-[15%] h-75 w-md p-5 shadow-lg rounded-sm">
              <div className="flex justify-between items-center">
                <h1 className="uppercase text-xl font-bold">
                  {slide.category}
                </h1>
                <div className="flex justify-center items-center">
                  {sliderComic.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full border-1 border-[#c42f44] m-1 cursor-pointer transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-[#c42f44] scale-125"
                          : "bg-transparent hover:bg-[#c42f44]/50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl font-bold my-5">{slide.title}</h1>
              <p className="text-xs font-bold h-25 line-clamp-4">
                {slide.description}
              </p>
              <Link to={`/comic/${slide.comicId}`} className="place-self-end">
                <div className="flex justify-center items-center h-10 w-42 rounded-2xl bg-[#c42f44] cursor-pointer hover:bg-[#a12837] hover:scale-105 duration-300 shadow-md">
                  <h1 className="text-xl font-bold uppercase text-white text-center">
                    Đọc ngay
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Nút chuyển slide trước/sau (tùy chọn) */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300"
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + sliderComic.length) % sliderComic.length
          )
        }
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300"
        onClick={() => setCurrentSlide((currentSlide + 1) % sliderComic.length)}
      >
        →
      </button>
    </div>
  );
};

export default Slider;
