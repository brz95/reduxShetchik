import React from "react";
import { useDispatch } from "react-redux";
import random from './assets/random.png'


const Random = () => {
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "random" });
  };

  return <div className="random" onClick={() => handleRandom()}>
      <img src={random} alt="random" />
  </div>;
};

export default Random;
