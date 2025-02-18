import { useState } from "react";
import Square from "./components/Square";

export default function Board() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }
  return (
    <>
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
