export const questReducer = (questions = [], action) => {
  switch (action.type) {
    case "ADD_QUEST": {
      return [...questions, action.payload.question];
    }
    case "DELETE_QUEST": {
      return questions;
    }
    default:
      return questions;
  }
};

const getRandom = () => Math.floor(Math.random() * 1000 + 1);
const q = {
  question: "",
  option: [{ id: getRandom(), value: " " }],
};

export const question = (question = q, action) => {
  switch (action.type) {
    case "UPDATE_QUEST": {
      return { ...question, question: action.payload.value };
    }
    case "ADD_OPT": {
      const opt = {
        id: getRandom(),
        value: "",
      };
      const option = [...question.option, opt];

      return { ...question, option: option };
    }
    case "DELETE_OPT": {
      const option = [...question.option];
      const index = option.findIndex((obj) => obj.id === action.payload.id);
      option.splice(index, 1);

      return { ...question, option: option };
    }
    case "UPDATE_OPT": {
      const option = [...question.option];
      const index = option.findIndex((obj) => obj.id === action.payload.id);
      option[index].value = action.payload.value;
      return { ...question, option: option };
    }
    case "RESET": {
      return {
        question: "",
        option: [{ id: getRandom(), value: " " }],
      };
    }
    default:
      return question;
  }
};
