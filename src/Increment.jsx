import React from "react";
import { useDispatch } from "react-redux";
import add from './assets/add.png'

const Increment = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  return <div className="plus" onClick={() => handleIncrement()}>
      <img src={add} alt="lol" />
  </div>;
};

export default Increment;
