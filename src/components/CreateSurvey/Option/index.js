import React from "react";
import "./Option.css";
function Option() {
  return (
    <div className="option">
      <input type="text" className="option-input" />
      <button type="button" className="option-plus-btn">
        +
      </button>
      <button type="button" className="option-minus-btn">
        -
      </button>
    </div>
  );
}

export default Option;
