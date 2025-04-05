import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1b0e2d] text-white p-4">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-[#C42F44] text-9xl font-bold mb-4"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.div
          className="w-full h-1 bg-gradient-to-r from-transparent via-[#C42F44] to-transparent mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        ></motion.div>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Trang không tồn tại
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển đến địa chỉ
          khác.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#C42F44] to-[#ff4d6d] text-white font-medium rounded-lg hover:shadow-[0_8px_20px_rgba(255,77,109,0.5)] hover:scale-105 transform transition-all duration-300"
          >
            Quay về trang chủ
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
