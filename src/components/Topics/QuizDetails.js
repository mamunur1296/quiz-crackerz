import React from "react";
import { toast } from "react-toastify";
import Options from "./Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const QuizDetails = ({ data, length }) => {
  let quentaty = length + 1;
  const hendelQurzBtn = (option) => {
    if (data.correctAnswer === option) {
      toast.success("rite anss", { autoClose: 500 });
    } else {
      toast.error("rite anss", { autoClose: 500 });
    }
  };
  const HendalVigibal = () => {
    Swal.fire(data.correctAnswer);
  };
  return (
    <div>
      <h1 className="text-2xl my-10 font-bold leading-none text-center sm:text-2xl lg:w-4/6 mx-auto">
        Quiz No {quentaty}
        {data.question}
      </h1>
      <p
        onClick={() => HendalVigibal()}
        className="mx-auto text-center text-2xl my-5"
      >
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </p>
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
