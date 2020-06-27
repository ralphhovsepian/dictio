import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { UserProvider } from './Components/UserContext';

import 'materialize-css/dist/css/materialize.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
