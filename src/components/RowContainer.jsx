import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      <div className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
        <div className="flex items-center justify-between w-full">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-40 h-40 -mt-8 drop-shadow-2xl"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-7471a.appspot.com/o/Images%2F1655030369475-f6.png?alt=media&token=c7cfab65-e4e2-4f53-bb08-d2fda820545d"
              alt="food-img"
              className="object-contain w-full h-full"
            />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="flex items-center justify-center w-8 h-8 -mt-8 bg-red-600 rounded-full cursor-pointer hover:shadow-md"
            // onClick={() => setItems([...cartItems, item])}
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
