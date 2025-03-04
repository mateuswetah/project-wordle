import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess }) {
  const guessAsArray = guess.split('');

  return <p className="guess">
    {
      range(5).map((index) => <span key={ index } className="cell">{ guessAsArray[index] ? guessAsArray[index] : '' }</span>)
    }
  </p>;
}

export default Guess;
