import { useState } from "react";
import Square from "./components/Square";

export default function Board() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(square);
  let statusResult;

  if (winner) {
    statusResult = "Winner: " + winner;
  } else {
    statusResult = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{statusResult}</div>
      <div className="board-row">
        <Square square={square[0]} onSquareClick={() => handleClick(0)} />
        <Square square={square[1]} onSquareClick={() => handleClick(1)} />
        <Square square={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square square={square[3]} onSquareClick={() => handleClick(3)} />
        <Square square={square[4]} onSquareClick={() => handleClick(4)} />
        <Square square={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square square={square[6]} onSquareClick={() => handleClick(6)} />
        <Square square={square[7]} onSquareClick={() => handleClick(7)} />
        <Square square={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
