import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import "./TopicDetails.css";

const TopicDetails = () => {
  const data = useLoaderData().data;
  const questions = data.questions;

  return (
    <div className="my-20">
      <section className="py-6 dark:text-black">
        <div className=" mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Quez Of {data.name}
          </h1>
          {questions.map((data, length) => (
            <QuizDetails
              key={data.id}
              length={length}
              data={data}
            ></QuizDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopicDetails;
