import React from "react";
import { Link } from "react-router-dom";

const Catagory = ({ tutorial }) => {
  const { id, name, total, logo } = tutorial;
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src={logo} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-800">
          <span className="text-xs uppercase dark:text-gray-100">
            Total Quiz : {total}
          </span>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="my-6 dark:text-gray-100">
            Create a questionnaire online for free. Get answers & actionable
            insights. Discover why we're a leading questionnaire platform around
            the globe.
          </p>
          <Link to={`../topicdetails/${id}`}>
            <button type="button" className="self-start">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
