import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const initialState = Array(9).fill(null);
  const [state, setState] = useState(initialState);
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClicked = (index) => {
    if(state[index] !== null){
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {`${isWinner}'s Won the Game`}
          <button onClick={() => setState(initialState)}>Play Again</button>
        </>
      ) : (
        <>
        <h4>Player {isXTurn ? "X" : "O"} please move it's your turn</h4>
          <div className="board-row">
            <Square onClick={() => handleClicked(0)} value={state[0]} />
            <Square onClick={() => handleClicked(1)} value={state[1]} />
            <Square onClick={() => handleClicked(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClicked(3)} value={state[3]} />
            <Square onClick={() => handleClicked(4)} value={state[4]} />
            <Square onClick={() => handleClicked(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClicked(6)} value={state[6]} />
            <Square onClick={() => handleClicked(7)} value={state[7]} />
            <Square onClick={() => handleClicked(8)} value={state[8]} />
          </div>
          <button onClick={() => setState(initialState)}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Board;
