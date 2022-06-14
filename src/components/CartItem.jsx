import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

const CartItem = () => {
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-7471a.appspot.com/o/Images%2F1655030272289-f3.png?alt=media&token=cd3720b6-61af-4c5c-98ee-a97eba800497"
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt="cart-item-img"
      />
      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">item?.title</p>
        <p className="text-sm block text-gray-300 font-semibold">
          {/* $ {parseFloat(item?.price) * qty} */} Name
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          //   onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          qty
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          //   onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
