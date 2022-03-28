import React from "react";
import { useSelector } from "react-redux";

const Number = () => {
  const number = useSelector((state) => state.number);
  return <div className="number">{number}</div>;
};

export default Number;
