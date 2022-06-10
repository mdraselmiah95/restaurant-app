import React from "react";

//images
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
const HomeContainer = () => {
  return (
    <section
      className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 "
      id="home"
    >
      <div className="flex flex-col items-start justify-center flex-1 gap-6 py-2">
        <div className="flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden bg-white rounded-full drop-shadow-xl">
            <img
              src={Delivery}
              className="object-contain w-full h-full"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="w-full px-4 py-2 transition-all duration-100 ease-in-out rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto hover:shadow-lg"
        >
          Order Now
        </button>
      </div>
      <div className="relative flex items-center flex-1 py-2">
        <img
          src={HeroBg}
          className="w-full ml-auto  h-420 lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="absolute top-0 left-0 flex flex-wrap items-center justify-center w-full h-full gap-4 py-4 lg:px-32"></div>
      </div>
    </section>
  );
};

export default HomeContainer;
