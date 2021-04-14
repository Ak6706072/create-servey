import React, { useState } from "react";
import "./CreateSurvey.css";
import SingleSelection from "./SingleSelection";
import MultiSelection from "./MultiSelection";
import { updateQuestion } from "../redux/actions";
import { useDispatch } from "react-redux";

function CreateSurvey() {
  const [selection, setSelection] = useState(0);
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const markSelection = (event) => {
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
        <input
          type="text"
          className="create-survey-question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          onKeyUp={() => {
            console.log("key");
            dispatch(updateQuestion(question));
          }}
        />
        <hr />
        <h6 className="create-survey-option">Options:</h6>

        {selection == 0 ? (
          <MultiSelection data={"Multi select"} question={question} />
        ) : (
          <SingleSelection data={"Single select"} question={question} />
        )}
      </div>
    </div>
  );
}

export default CreateSurvey;
