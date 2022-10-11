import React from "react";

const Options = ({ option, length, hendelQurzBtn }) => {
  const namber = length + 1;
  return (
    <div>
      <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
        <div className="flex flex-col w-full divide-y divide-gray-700">
          <button
            rel="noopener noreferrer"
            onClick={() => hendelQurzBtn(option)}
            className="flex items-center border justify-center p-3 sm:py-4 lg:py-6 w-80 my-4 mx-auto"
          >
            {namber} : {option}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
