import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

//Images
import NotFound from "../img/NotFound.svg";

const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="flex items-center justify-between w-full">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
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

            <div className="flex flex-col items-end justify-end w-full -mt-8">
              <p className="text-base font-semibold text-textColor md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>

              <div className="flex items-center gap-8">
                <p className="text-lg font-semibold text-headingColor">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <img src={NotFound} className="h-340" alt="notFound-img" />
          <p className="my-2 text-xl font-semibold text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
