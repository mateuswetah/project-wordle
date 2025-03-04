import React from 'react';

function GuessInput({ guess, setGuess, processGuess }) {

  return <form 
    className="guess-input-wrapper" 
    onSubmit={ processGuess }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text"
      value={ guess } 
      onChange={ (event) => setGuess(event.target.value.toUpperCase()) }
      minLength={ 5 }
      maxLength={ 5 } />
  </form>;
}

export default GuessInput;
