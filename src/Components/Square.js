import React from 'react';

const Square = ({ val, buttonPress, isWinnerSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinnerSquare ? 'winning' : ''} ${
        val === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={buttonPress}
    >
      {val}
    </button>
  );
};

export default Square;
