import React from 'react';
import Square from './Square';

const Board = ({ currentBoardState, handleButtonPress, winnerIndexs }) => {
  const renderSquareButton = position => {
    const isWinnerSquare = winnerIndexs.includes(position);
    return (
      <Square
        val={currentBoardState[position]}
        buttonPress={() => {
          handleButtonPress(position);
        }}
        isWinnerSquare={isWinnerSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquareButton(0)}
        {renderSquareButton(1)}
        {renderSquareButton(2)}
      </div>
      <div className="board-row">
        {renderSquareButton(3)}
        {renderSquareButton(4)}
        {renderSquareButton(5)}
      </div>
      <div className="board-row">
        {renderSquareButton(6)}
        {renderSquareButton(7)}
        {renderSquareButton(8)}
      </div>
    </div>
  );
};

export default Board;
