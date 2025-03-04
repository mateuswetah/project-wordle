import React from 'react';

function GuessInput({ processGuess, disabled }) {

  const [guess, setGuess] = React.useState('');

  return <form 
    className="guess-input-wrapper" 
    onSubmit={ (event) => {
      
      event.preventDefault();

      processGuess(guess);
      
      setGuess('');

    } }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text"
      disabled={ disabled }
      value={ guess } 
      onChange={ (event) => setGuess(event.target.value.toUpperCase()) }
      required
      minLength={ 5 }
      maxLength={ 5 }
      pattern="[a-zA-Z]{5}"
      title="5 letter word" />
  </form>;
}

export default GuessInput;
