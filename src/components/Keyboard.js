import React from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz".split('');

const Keyboard = ({ guessedLetters, handleGuess, disabled }) => {
  return (
    <div>
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
