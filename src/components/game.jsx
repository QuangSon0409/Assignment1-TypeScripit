import { useState } from "react";
import Broad from "./broad";

const Game = () => {
  const [broad, setBroad] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);
  const [lastBroad, setLastBroad] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [winningSquare, setWinningSquare] = useState(null);
  const [undo, setUndo] = useState({
    X: true,
    O: true,
  });

  const handleClick = (index) => {
    const broadCopy = broad.map((item, i) => {
      if (i === index) {
        return player ? "X" : "O";
      }
      return item;
    });
    const result = calculatorWin(broad);
    if (result) {
      setWinner(result.winner);

      setWinningSquare(result.winnerSquares);
    }
    console.log(result);
    if (result || broad[index]) return;

    // broadCopy[index] = player ? "X" : "O";
    const newLastBoard = [...broad];
    setBroad(broadCopy);
    setPlayer(!player);
    setLastBroad(newLastBoard);
    setStepNumber(stepNumber + 1);
    console.log(stepNumber);
  };
  const calculatorWin = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          winnerSquares: lines[i],
        };
      }
    }
    // setWinningSquare([]);

    return null;
  };

  const handleUndoClick = () => {
    setBroad(lastBroad);
    setPlayer(!player);
    setStepNumber(stepNumber - 1);
    console.log(stepNumber);
  };
  const checkUndo = () => {
    // if (stepNumber === 0) return;
    if (stepNumber % 2 === 0) {
      if (undo.X === true) {
        setUndo({
          ...undo,
          X: false,
        });
        handleUndoClick();
      }
    }
    if (stepNumber % 2 === 1) {
      if (undo.O === true) {
        setUndo({
          ...undo,
          O: false,
        });
        handleUndoClick();
      }
    }
  };
  const resetGame = () => {
    setBroad(Array(9).fill(null));
    setPlayer(!player);
  };

  return (
    <div className="static flex justify-center items-center h-[100vh]">
      <Broad
        square={broad}
        onClick={handleClick}
        winningSquares={winningSquare}
      ></Broad>
      <br />
      <h1 className="absolute top-10 text-base font-bold text-red-600">
        {winner ? `Winner is ${winner}` : ""}
      </h1>
      <button
        className="w-[100px] h-[50px] absolute bottom-16 rounded text-white bg-cyan-500 font-bold p-2"
        onClick={resetGame}
      >
        ResetGame
      </button>
      <button
        className="w-[100px] h-[40px] m-3 absolute bottom-28 rounded text-white bg-cyan-500 font-bold p-2"
        onClick={checkUndo}
      >
        Undo
      </button>
    </div>
  );
};

export default Game;
