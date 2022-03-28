import React from 'react';
import Decrement from './Decrement';
import Increment from './Increment';
import Number from './Number';
import Random from './Random';
import Reset from './Reset';

const App = () => {
  return (
    <div className='app'>
      <Number/>
      <div className='numbers'>
      <Increment/>
      <Decrement/>
      <Reset/>
      <Random/>
      </div>
    </div>
  );
};

export default App;