import React from "react";
import { useState } from "react";
import "../Square/Square.css";

const Square = () => {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
