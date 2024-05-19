import React from 'react';

const GameStatus = ({ wrongGuesses, maxWrongGuesses, resetGame, isGameOver, isGameWon, word }) => {
  return (
    <div>
      <p>Wrong guesses: {wrongGuesses} / {maxWrongGuesses}</p>
      {isGameOver && <p className="game-over">Game Over! The word was "{word}"</p>}
      {isGameWon && <p className="game-won">Congratulations! You won!</p>}
      <button onClick={resetGame} className="reset-button">Reset Game</button>
    </div>
  );
};

export default GameStatus;
