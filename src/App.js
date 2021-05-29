import {useContext} from 'react';
import {GameContext} from './context/game-context';

import Button from './components/Button/Button';

import './App.css';

function App() {

  const gameContext = useContext(GameContext);

  return (
    <div className="App">
      <div className="board">
        <Button />
        <div className="side"></div>
        <Button />
        <div className="side"></div>
        <Button />
        <div className="side"></div>
        <Button />

        <div className="side"></div>
        <div className="num">2</div>
        <div className="side"></div>
        <div className="num">1</div>
        <div className="side"></div>
        <div className="num">0</div>
        <div className="side"></div>

        <Button />
        <div className="side"></div>
        <Button />
        <div className="side"></div>
        <Button />
        <div className="side"></div>
        <Button />
      </div>
      {/* {gameContext.board} */}
    </div>
  );
}

export default App;
