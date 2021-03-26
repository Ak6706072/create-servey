import React, { useState } from "react";
import "./CreateSurvey.css";
import SingleSelection from "./SingleSelection";
import MultiSelection from "./MultiSelection";

function CreateSurvey() {
  const [selection, setSelection] = useState(0);
  const markSelection = (event) => {
    console.log(event.target.value);
    setSelection(event.target.value);
  };
  return (
    <div className="create-survey">
      <select onChange={markSelection} className="create-survey-btn-select">
        <option value="0">Multi-Select</option>
        <option value="1">Single-Select</option>
      </select>

      <div className="create-survey-footer">
        <button className="create-survey-question-mark">?</button>
        <input type="text" className="create-survey-question" />
        <hr />
        <h6 className="create-survey-option">Options:</h6>

        {selection == 0 ? (
          <MultiSelection data={"Myulti select"} />
        ) : (
          <SingleSelection data={"Single select"} />
        )}
      </div>
    </div>
  );
}

export default CreateSurvey;
