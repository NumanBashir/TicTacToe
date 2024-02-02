import React from "react";
import "../Board/Board.css";

const Board = () => {
  return (
    <>
      <div className="frame">
        <div className="board-row">
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>
        <div className="board-row">
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>
        <div className="board-row">
          <button className="square">X</button>
          <button className="square">X</button>
          <button className="square">X</button>
        </div>
      </div>
    </>
  );
};

export default Board;