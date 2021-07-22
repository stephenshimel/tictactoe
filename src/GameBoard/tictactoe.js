// Positions on the board are indexed as follows:
// 012
// 345
// 678

/** @typedef {0|1|2|3|4|5|6|7|8} Position a position is an index on the board */
/** @typedef {Position[]} Turns The turns list is a sequential array of board positions */
/** @typedef {"x" | "o"} Player */
/** @typedef {null | Player} Square A square may be null if no player has used it */
/** @typedef {Square[]} Board The board is stored as a 1 dimensional array of squares */

/**
 * Adds a new turn to the game if available.
 * @param {Turns} currentTurns the current turns played in the game so far
 * @param {number} position the position (index) to play the new turn
 * @returns {Turns} an updated list of turns in the game
 */
export function playNextTurn(currentTurns, position) {
  if (currentTurns.includes(position)) {
    throw new Error("Position already played");
  }
  return [...currentTurns, position];
}

/**
 * Converts a list of "turns" in the game to a board
 * @param {Turns} turns
 * @returns {Board}
 */
export function toBoard(turns) {
  const out = new Array(9).fill(null);

  turns.forEach((t, i) => {
    out[t] = i % 2 ? "o" : "x";
  });

  return out;
}

/** Full list of combinations in which a game can be won */
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Returns the winner for a game, or null if no winner
 * @param {Turns} turns
 * @returns {null | Player}
 */
export function checkWinner(turns) {
  const board = toBoard(turns);
  const lastPlayer = turns.length % 2 ? "x" : "o";

  for (const combo of winningCombos) {
    if (
      board[combo[0]] === lastPlayer &&
      board[combo[1]] === lastPlayer &&
      board[combo[2]] === lastPlayer
    )
      return lastPlayer;
  }

  return null;
}

/**
 * Undo the last turn in the game
 * @param {Turns} turns the current game
 * @returns {Turns} the updated game with last turn undone
 */
export function undo(turns) {
  return turns.slice(0, -1);
}
