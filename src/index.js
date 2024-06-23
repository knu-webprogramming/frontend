import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './redux/store';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle/>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);