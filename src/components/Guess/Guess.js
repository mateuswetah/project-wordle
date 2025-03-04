import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const checkGuessArray = checkGuess(guess, answer);

  return <p className="guess">
    {
      range(5).map((index) => <span key={ index } className={ 'cell ' + (checkGuessArray ? checkGuessArray[index].status : '') }>
        { checkGuessArray ? checkGuessArray[index].letter : '' }
      </span>)
    }
  </p>;
}

export default Guess;
