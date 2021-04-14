export const resetQuestion = () => {
  return {
    type: "RESET",
  };
};

export const addOptionInStore = () => {
  return {
    type: "ADD_OPT",
    payload: {},
  };
};

export const removeOptionInStore = (id) => {
  return {
    type: "DELETE_OPT",
    payload: {
      id: id,
    },
  };
};

export const updateOptionToStore = (id, text) => {
  return {
    type: "UPDATE_OPT",
    payload: {
      id: id,
      value: text,
    },
  };
};
export const updateQuestion = (text) => {
  return {
    type: "UPDATE_QUEST",
    payload: {
      value: text,
    },
  };
};

export const addQuestion = (question) => {
  return {
    type: "ADD_QUEST",
    payload: {
      question: question,
    },
  };
};
