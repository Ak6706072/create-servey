import React from "react";
import "./MultiSelection.css";
import Option from "../Option";
import { useDispatch, useSelector } from "react-redux";
import { resetQuestion, addQuestion } from "../../redux/actions";

function MultiSelection(props) {
  const quest = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const submitQuestion = () => {
    const question = {
      question: quest.question,
      option: quest.option,
    };
    dispatch(addQuestion(question));
    dispatch(resetQuestion());
  };

  return (
    <div>
      {props.data}
      {quest.option.map((option) => {
        return <Option opt={option} />;
      })}
      {quest.option.length === 4 ? (
        <>
          <button onClick={submitQuestion}>publish</button>
        </>
      ) : null}
    </div>
  );
}

export default MultiSelection;
