import React from "react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto ">
      <HomeContainer />
      <section className="w-full my-6"></section>
    </div>
  );
};

export default MainContainer;
