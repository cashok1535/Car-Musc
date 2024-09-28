import React from "react";

const Button = ({ type = "toRight", text, ref }) => {
  return (
    <button className={`headerButton ${type}`} ref={ref}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
