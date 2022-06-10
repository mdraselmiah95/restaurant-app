import React from "react";

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
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
