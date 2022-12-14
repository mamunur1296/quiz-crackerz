import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";
import "./TopicDetails.css";

const TopicDetails = () => {
  const data = useLoaderData().data;
  const questions = data.questions;

  return (
    <div>
      <section className="bg-gray-800 text-gray-200">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
          <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">
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
