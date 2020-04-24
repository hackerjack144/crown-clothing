import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//next step starts here after root-reducer.js
import { PersistGate } from 'redux-persist/integration/react'; // used react as it will be usable for multiple plateforms

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);