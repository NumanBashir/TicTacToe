import React from "react";
import { useState } from "react";
import "../Board/Board.css";
import Square from "../Square/Square";

const Board = () => {
  return (
    <>
      <div className="frame">
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
};

export default Board;
