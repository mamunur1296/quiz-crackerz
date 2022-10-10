import React from "react";
import Options from "./Options";

const QuizDetails = ({ data, length }) => {
  let quentaty = length + 1;
  console.log(data);
  return (
    <div>
      <p className="text-xl font-medium text-center">
        Quiz No {quentaty}
        {data.question}
      </p>
      <div className=" ">
        {data.options.map((option, length) => (
          <Options option={option} length={length}></Options>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
