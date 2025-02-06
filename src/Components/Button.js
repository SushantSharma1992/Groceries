import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <div>
      <span className="resetDefaultWidth direction_column button_container">
        <button className="center primary_button" onClick={onClick}>
          {children}
        </button>
      </span>
    </div>
  );
};

export default Button;
