import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses/Guesses';
import Banner from '../Banner/Banner';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);

  const processGuess = (event) => {
    
    event.preventDefault();
    
    let futureGuesses = [...guesses];
    futureGuesses.push(guess);
    
    setGuesses(futureGuesses);
    setGuess('');

    if ( guess !== answer)
      setIncorrectGuesses(incorrectGuesses + 1);
    else
      setHasWon(true);
  }

  return <>
    <Guesses guesses={ guesses } answer={ answer } />
    <GuessInput disabled={ hasWon || guesses.length > 5 } guess={guess} setGuess={ setGuess } processGuess={ processGuess }  />
    { hasWon || guesses.length > 5 ?
      <Banner type={ hasWon ? 'happy' : 'sad' }>
        { hasWon ?
          ( <p><strong>Congratulations!</strong> Got it in <strong>{ (incorrectGuesses + 1) } guesses</strong></p> ) :
          ( <p>Sorry, the correct answer is <strong>{ answer }</strong></p> )
        }
      </Banner>
      : null
    }
  </>;
}

export default Game;
