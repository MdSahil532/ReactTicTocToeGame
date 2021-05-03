import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './Helper/GetWinner';
import './Styles/root.scss';

const NEW_GAME = [
  { currentBoardState: Array(9).fill(null), isXNextPlayer: true },
];

const App = () => {
  const [currentHistory, setCurrentHistory] = useState(NEW_GAME);
  const [currentStep, setCurrentStep] = useState(0);

  const recent = currentHistory[currentStep];

  const { winner, winnerIndexs } = calculateWinner(recent.currentBoardState);

  const handleButtonPress = pos => {
    if (recent.currentBoardState[pos] != null || winner != null) {
      return;
    }
    setCurrentHistory(prevHistory => {
      const lastHistory = prevHistory[prevHistory.length - 1];
      const newHistory = lastHistory.currentBoardState.map(
        (stateValue, index) => {
          if (index === pos) {
            return lastHistory.isXNextPlayer ? 'X' : 'O';
          }
          return stateValue;
        }
      );
      return prevHistory.concat({
        currentBoardState: newHistory,
        isXNextPlayer: !lastHistory.isXNextPlayer,
      });
    });

    setCurrentStep(prevStep => prevStep + 1);
  };

  const moveTo = move => {
    setCurrentStep(move);
  };

  const startNewGame = () => {
    setCurrentHistory(NEW_GAME);
    setCurrentStep(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} recent={recent} />
      <Board
        currentBoardState={recent.currentBoardState}
        handleButtonPress={handleButtonPress}
        winnerIndexs={winnerIndexs}
      />
      <button
        className={`btn-reset ${winner ? 'active' : ''}`}
        type="button"
        onClick={startNewGame}
      >
        Start new game
      </button>
      <h3 style={{ padding: '3px', fontWeight: 'normal' }}>
        Current game history
      </h3>
      <History
        history={currentHistory}
        moveTo={moveTo}
        currentMove={currentStep}
      />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
