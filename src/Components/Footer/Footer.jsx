import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='Footer'>
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Dictio App</h5>
              <br />
              <p className='grey-text text-lighten-4'>Made by Ralph with ❤️</p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2020 All rights reserverd
            <a className='grey-text text-lighten-4 right' href='#!'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className='grey-text text-lighten-4 right' href='#!'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='grey-text text-lighten-4 right' href='#!'>
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a className='grey-text text-lighten-4 right' href='#!'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
