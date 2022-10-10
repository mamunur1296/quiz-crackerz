import React from "react";

const Options = ({ option, length }) => {
  const namber = length + 1;
  return (
    <div>
      <p>
        <button>
          <small>
            {namber} : {option}
          </small>
        </button>
      </p>
    </div>
  );
};

export default Options;
