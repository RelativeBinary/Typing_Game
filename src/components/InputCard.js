import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const InputCard = () => {
  //Component level state (hooked to JSX)
  const [word, setWord] = useState('');
  return (
    <div className='box'>
      <h2>👩‍💻 Can you handle the keys? 👨‍💻</h2>
      <small>Type the following:</small>
      <h1 className='word'>fibonacci</h1>
      <input
        type='text'
        autocomplte='off'
        placeholder='Type the word here...'
      />
    </div>
  );
};
