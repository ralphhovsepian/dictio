import React, { useContext } from 'react';
import searchImg from '../Styling/search.svg';
import './Home.css';
import { UserContext } from '../UserContext';

//Component
import ShowResult from '../ShowResult/ShowResult';

export default function Home() {
  //state from context api
  const { wordResults } = useContext(UserContext);
  const [wordResult, setWordResult] = wordResults;

  return (
    <div className='Home'>
      {wordResult == '' ? <img src={searchImg} alt='search' /> : <ShowResult />}
    </div>
  );
}
