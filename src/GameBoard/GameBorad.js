import React, { useState } from "react";
import PropTypes from "prop-types";
import { playNextTurn, toBoard, checkWinner, undo } from "./tictactoe";
import { Board, Cell, Info, RestarttButton } from "./GameBoard.style";

const GameBorad = (props) => {
  const initTurns = [];
  const [turns, setTurns] = useState(initTurns);
  const [info, setInfo] = useState("");

  const handleOnClick = (index) => {
    // invalid move
    if (!playNextTurn(turns, index)) {
      setInfo("this is not a valid move");
      return;
    }

    // play
    const newTurn = playNextTurn(turns, index);
    setTurns(newTurn);

    // game has not ended yet
    if (!checkWinner(newTurn)) {
      setInfo("please continue");
      return;
    }

    // game ends
    setInfo(
      `${checkWinner(newTurn)} wins! Press the button the play another game!`
    );
  };

  const restartGame = () => {
    setTurns(initTurns);
  };

  return (
    <div className="App">
      <Board>
        {toBoard(turns).map((cell, index) => (
          <Cell onClick={() => handleOnClick(index)}>
            {cell == null ? "-" : cell}
          </Cell>
        ))}
      </Board>
      <Info>{info}</Info>
      <RestarttButton onClick={restartGame}>Restart</RestarttButton>
    </div>
  );
};

GameBorad.propTypes = {};

export default GameBorad;
