import React, { useState } from "react";
import "./Option.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addOptionInStore,
  removeOptionInStore,
  updateOptionToStore,
} from "../../redux/actions/";

function Option({ question, opt }) {
  const dispatch = useDispatch();
  const quest = useSelector((state) => state.question);
  const [option, setOption] = useState("");

  const addOption = () => {
    if (quest.option.length < 4) {
      dispatch(addOptionInStore());
    }
  };
  const removeOption = (uid) => {
    if (quest.option.length > 1) {
      dispatch(removeOptionInStore(uid));
    }
  };
  const updateOption = (uid) => {
    dispatch(updateOptionToStore(uid, option));
  };

  return (
    <div className="option">
      <input
        type="text"
        className="option-input"
        defaultValue={opt.value}
        onChange={(e) => {
          setOption(e.target.value);
          updateOption(opt.id);
        }}
      />
      <button type="button" className="option-plus-btn" onClick={addOption}>
        +
      </button>
      <button
        type="button"
        className="option-minus-btn"
        onClick={() => removeOption(opt.id)}
      >
        -
      </button>
    </div>
  );
}

export default Option;
