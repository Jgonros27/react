import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./Components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./Components/WinnerModal";
import { checkEndGame } from "./logic/board";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";

function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage =window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null);
    resetGameStorage()
  }



  const updateBoard = (index)=>{
    //no actualizamos si tiene algo o hay ganador
    if (board[index] || winner) return

    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //actualizar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //guardar partida
    saveGameToStorage({turn:newTurn, board:newBoard})

    //revisar ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)){
      setWinner(false); //empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
