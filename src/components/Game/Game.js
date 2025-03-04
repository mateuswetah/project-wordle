import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses/Guesses';
import Banner from '../Banner/Banner';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);

  const processGuess = (guess) => {

    let futureGuesses = [...guesses];
    futureGuesses.push(guess);
    
    setGuesses(futureGuesses);

    if ( guess !== answer)
      setIncorrectGuesses(incorrectGuesses + 1);
    else
      setHasWon(true);
  }

  return <>
    <Guesses guesses={ guesses } answer={ answer } />
    <GuessInput disabled={ hasWon || guesses.length >= NUM_OF_GUESSES_ALLOWED } processGuess={ processGuess }  />
    { hasWon || guesses.length >= NUM_OF_GUESSES_ALLOWED ?
      <Banner type={ hasWon ? 'happy' : 'sad' }>
        { hasWon ?
          ( <p><strong>Congratulations!</strong> Got it in <strong>{ incorrectGuesses <= 0 ? '1 guess' : ( (incorrectGuesses + 1) + ' guesses' ) }</strong></p> ) :
          ( <p>Sorry, the correct answer is <strong>{ answer }</strong></p> )
        }
      </Banner>
      : null
    }
  </>;
}

export default Game;
