import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/APP/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename="/goit-react-hw-05-movies/">
  <App />
</BrowserRouter>
);

// basename="/https://github.com/T-Dmutro/goit-react-hw-05-movies"
