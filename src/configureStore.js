import { createStore } from "redux";

const defaultState = {
  number: 0,
};

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        number: state.number + 1,
      };
    case "decrement":
      if (state.number > 0) {
        return {
          ...state,
          number: state.number - 1,
        };
      }
    case "reset":
      return {
        number: (state.number = 0),
      };
    case "random":
      return {
        number: state.number + Math.floor(Math.random() * 10),
      };
    default:
      return state;
  }
};

export const store = createStore(reduser);
