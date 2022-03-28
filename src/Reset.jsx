import React from "react";
import { useDispatch } from "react-redux";
import reset from './assets/reset.png'

const Reset = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return <div className="reset" onClick={() => handleReset()}>
      <img src={reset} alt="reset" />
  </div>;
};

export default Reset;
