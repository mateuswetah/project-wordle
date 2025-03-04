import React from 'react';

function Guesses({ guesses }) {
  return <div className='guess-results'>
    {
      guesses.map((guess, index) => <p key={ index }>{ guess }</p>)
    }
  </div>;
}

export default Guesses;
