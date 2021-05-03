import React from 'react';

const StatusMessage = ({ winner, recent }) => {
  const noStepLeft = recent.currentBoardState.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noStepLeft && (
        <>
          Next player is
          <span className={recent.isXNextPlayer ? 'text-green' : 'text-orange'}>
            {recent.isXNextPlayer ? ' X' : ' O'}
          </span>
        </>
      )}
      {!winner && noStepLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
