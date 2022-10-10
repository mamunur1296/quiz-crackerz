import React from "react";
import Options from "./Options";

const QuizDetails = ({ data, length }) => {
  let quentaty = length + 1;
  console.log(data);
  const hendelQurzBtn = (option) => {
    if (data.correctAnswer === option) {
      alert("rite ansser");
    }
    alert("rong");
  };
  return (
    <div>
      <h1 className="text-2xl font-bold leading-none text-center sm:text-2xl">
        Quiz No {quentaty}
        {data.question}
      </h1>
      {data.options.map((option, length) => (
        <Options
          option={option}
          hendelQurzBtn={hendelQurzBtn}
          length={length}
        ></Options>
      ))}
    </div>
  );
};

export default QuizDetails;
