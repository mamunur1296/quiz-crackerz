import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nave from "../../components/nav/Nave";
export const TutorialData = createContext();
const Root = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <TutorialData.Provider value={data}>
        <Nave></Nave>
        <Outlet></Outlet>R<Footer></Footer>
      </TutorialData.Provider>
    </div>
  );
};

export default Root;
