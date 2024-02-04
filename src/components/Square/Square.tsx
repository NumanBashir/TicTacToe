import React from "react";
import "../Square/Square.css";

interface Props {
  value: string;
  onSquareClick: () => void;
}

const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
