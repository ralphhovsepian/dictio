import React, { useContext } from 'react';
import searchImg from '../Styling/search.svg';
import './Home.css';
import { UserContext } from '../UserContext';
import ShowResult from '../ShowResult/ShowResult';
export default function Home() {
  const { wordResults } = useContext(UserContext);

  const [wordResult, setWordResult] = wordResults;

  return (
    <div className='Home'>
      {wordResult == '' ? <img src={searchImg} alt='search' /> : <ShowResult />}
    </div>
  );
}
