import React from 'react';
import loader from '../Styling/Loader.svg';
import './Loader.css';
function Loading() {
  return (
    <div className='Loader'>
      <img src={loader} alt='Loader' />
    </div>
  );
}

export default Loading;
