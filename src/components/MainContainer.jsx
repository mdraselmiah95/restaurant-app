import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto ">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="flex items-center justify-between w-full">
          <p className="relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600">
            Our fresh & healthy fruits
          </p>

          <div className="items-center hidden gap-3 md:flex">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(-200)}
              className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(200)}
              className="flex items-center justify-center w-8 h-8 transition-all duration-100 ease-in-out bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          scrollValue={scrollValue}
          data={foodItems?.filter((item) => item.category === "fruits")}
        />
      </section>
      <MenuContainer />
      <CartContainer />
    </div>
  );
};

export default MainContainer;
