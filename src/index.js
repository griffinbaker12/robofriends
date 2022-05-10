import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './components/App/app.component.jsx';
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
