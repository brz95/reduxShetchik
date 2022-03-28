import React from "react";
import { useDispatch } from "react-redux";
import minus from './assets/minus.png'

const Decrement = () => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return <div className="minus" onClick={() => handleDecrement()}>
      <img src={minus} alt="minus" />
  </div>;
};

export default Decrement;
