import React from "react";
import "./MultiSelection.css";
import Option from "../Option";
import Consumer from "@root/index.js";
function MultiSelection(props) {
  return (
    <Consumer>
      {(value) => {
        console.log(value);
        return (
          <div>
            {props.data}
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
          </div>
        );
      }}
    </Consumer>
  );
}

export default MultiSelection;
