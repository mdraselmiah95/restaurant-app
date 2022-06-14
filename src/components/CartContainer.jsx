import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <div>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <p
          //   whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          //   onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
