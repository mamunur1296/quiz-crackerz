import React from "react";
import { useLoaderData } from "react-router-dom";

const Topic = () => {
  const QData = useLoaderData();
  console.log(QData);
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam
      rerum sequi maxime exercitationem ad libero, suscipit ipsam veritatis ea!
    </div>
  );
};

export default Topic;
