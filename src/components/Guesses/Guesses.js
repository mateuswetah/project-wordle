import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function Guesses({ guesses, answer }) {
  return <div className='guess-results'>
    {
      range(NUM_OF_GUESSES_ALLOWED).map((index) => <Guess key={ index } answer={ answer } guess={ guesses[index] ? guesses[index] : '' } />)
    }
  </div>;
}

export default Guesses;
