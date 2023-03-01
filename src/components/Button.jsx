import React from "react";

const Button = ({ click }) => {
  return (
    <div>
      <button onClick={click}>
        <i className="bx bx-redo"></i>
      </button>
    </div>
  );
};

export default Button;
