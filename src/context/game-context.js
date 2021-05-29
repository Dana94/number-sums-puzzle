import React, {useState} from 'react';

import {level1} from './data';

const formatBoard = (level) => {
  let board = new Map();

  level1.forEach((row, x) => {
    row.forEach((col, y) => {
      board.set(col, new Map());

      // {
      //   2: {
      //     [0,0] : 0, ?
      //     "0,1" : 0, ?
      //     "1,0" : 0,
      //     "1,1" : 0
      //   }
      // }

      // console.log(col, x, y, board.set(col, new Map({`${x}`: x})))
    })
  })

  return board;
}

export const GameContext = React.createContext({
  level: 1,
  board: formatBoard(1)

  // board
    // Map with each containing a Set

});

const GameContextProvider = props => {
  const [board, setBoard] = useState(formatBoard(1));
  const [level, setLevel] = useState(null);

  const setLevelHandler = (level) => {
    setLevel(level);
  }


  return (
    <GameContext.Provider value={{board, level, setLevel: setLevelHandler}}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
