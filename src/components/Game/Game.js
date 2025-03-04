import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses/Guesses';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  const processGuess = (event) => {
    event.preventDefault();
    let futureGuesses = [...guesses];
    futureGuesses.push(guess);
    setGuesses(futureGuesses);
    setGuess('');
  }

  return <>
    <Guesses guesses={ guesses } answer={ answer } />
    <GuessInput guess={guess} setGuess={ setGuess } processGuess={ processGuess }  />
  </>;
}

export default Game;
