import React, { useState } from "react";
import PropTypes from "prop-types";
import { playNextTurn, toBoard, checkWinner, undo } from "./tictactoe";
import { Board, Cell } from "./GameBoard.style";

const GameBorad = (props) => {
  const initTurns = [0, 1, 4, 2, 8];
  const [turns, setTurns] = useState(initTurns);

  const hanleOnClick = (index) => {
    setTurns(playNextTurn(turns, index));
  };

  return (
    <div className="App">
      <Board>
        {toBoard(turns).map((cell, index) => (
          <Cell onClick={() => hanleOnClick(index)}>
            {cell == null ? "-" : cell}
          </Cell>
        ))}
      </Board>
    </div>
  );
};

GameBorad.propTypes = {};

export default GameBorad;
