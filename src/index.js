import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
