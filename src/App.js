import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";

const App = () => {
  return (
    <div className="flex flex-col w-screen h-auto bg-primary">
      <Header />

      <main className="w-full px-4 py-4 mt-14 md:mt-20 md:px-16">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
