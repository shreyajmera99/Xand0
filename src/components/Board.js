import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [xNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculatewinner(squares);
  const isDraw = squares.every(square => square !== null) && !winner;

  let status;

  if (winner) {
    status = "Hurray Winner is: " + winner;
  } else if (isDraw) {
    status = "Game Draw";
  } else {
    status = "Next Player: " + (xNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const nextsquare = squares.slice();

    if (xNext) {
      nextsquare[i] = "X";
    } else {
      nextsquare[i] = "O";
    }
    setSquares(nextsquare);
    setxIsNext(!xNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setxIsNext(true);
  };

  const isSquareDisabled = (i) => {
    return winner || squares[i] !== null
    
   
  };

  return (
    <>
      <nav className="navbarr">| X and O |</nav>
      <div className="maindiv">
        <div className="boardrow">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            disabled={isSquareDisabled(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            disabled={isSquareDisabled(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            disabled={isSquareDisabled(2)}
          />
        </div>
        <div className="boardrow">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            disabled={isSquareDisabled(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            disabled={isSquareDisabled(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            disabled={isSquareDisabled(5)}
          />
        </div>
        <div className="boardrow">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            disabled={isSquareDisabled(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            disabled={isSquareDisabled(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            disabled={isSquareDisabled(8)}
          />
        </div>
        <div className="status">{status}</div>

        <div className="btnclass">
          <button className="resetbtn" onClick={resetGame}>
            Reset Name
          </button>
        </div>
      </div>
    </>
  );
}

// ... (calculatewinner function remains unchanged)


const calculatewinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return ;
};
