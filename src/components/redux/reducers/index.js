import { combineReducers } from "redux";
import { questReducer, question } from "./questions.js";

const allReducers = combineReducers({
  questions: questReducer,
  question: question,
});

export default allReducers;
