import React, { useContext } from 'react';
import './Header.css';
import book from '../Styling/book.svg';
import Modal from '../Modal/Modal';

import { UserContext } from '../UserContext';

export default function Header() {
  const { users, current } = useContext(UserContext);
  const [user, setUser] = users;
  const [currentUser, setCurrent] = current;

  return (
    <div className='Header'>
      <div>
        <h2>Discover and pin new words!</h2>
        <h5>
          Search for any word that you can't understand, check the definition
          and pin it for later use!
        </h5>
        <a
          className='waves-effect waves-light btn-large'
          data-target='login'
          className='waves-effect waves-light btn modal-trigger'
          href='#login'
        >
          Get started<i class='material-icons left'>login</i>
        </a>
      </div>
      <img src={book} alt='book worm' />
      <Modal />
    </div>
  );
}
