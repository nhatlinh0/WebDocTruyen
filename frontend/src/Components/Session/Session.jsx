import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Session = (props) => {
  return (
    <div className="mx-30 mb-20">
      <div className="flex justify-between items-center my-12">
        <h1 className="uppercase text-white text-2xl font-bold">
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
              <p className="text-xl font-bold text-white" sort={""}>
                Xem thêm
              </p>
              <MdKeyboardArrowRight className="text-white text-2xl" />
            </div>
          </Link>
        )) || <div></div>}
      </div>

      <div className="grid grid-cols-5 justify-items-center gap-y-10">
        {props.children}
      </div>
    </div>
  );
};

export default Session;
