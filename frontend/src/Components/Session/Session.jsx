import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Session = (props) => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-30 mb-12 md:mb-20">
      <div className="flex justify-between items-center my-6 md:my-8 lg:my-12">
        <h1 className="uppercase text-white text-lg md:text-2xl font-bold">
          {props.title}
        </h1>
        {(props.more && (
          <Link to={`/${props.type}`}>
            <div
              className="flex items-center cursor-pointer hover:opacity-80 hover:scale-105 duration-300"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-sm md:text-xl font-bold text-white" sort={""}>
                Xem thêm
              </p>
              <MdKeyboardArrowRight className="text-white text-xl md:text-2xl" />
            </div>
          </Link>
        )) || <div></div>}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-y-10">
        {props.children}
      </div>
    </div>
  );
};

export default Session;
