import React from "react";
import { useLoaderData } from "react-router-dom";
import "./TopicDetails.css";

const TopicDetails = () => {
  const data = useLoaderData().data;
  const { name } = data;
  return (
    <div className="my-20">
      <section className="py-6 dark:text-black">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Quez Of {name}
          </h1>
          <p className="text-xl font-medium text-center">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
          <div className="mx-auto w-10/12">
            <button className=" bun-quiz ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, dignissimos.
            </button>
            <button className=" bun-quiz ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, dignissimos.
            </button>
            <button className=" bun-quiz ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, dignissimos.
            </button>
            <button className=" bun-quiz ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, dignissimos.
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopicDetails;
