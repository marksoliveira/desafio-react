import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ServerInfosProvider } from './providers/serverInfos';

ReactDOM.render(
  <React.StrictMode>
    <ServerInfosProvider>
      <App />
    </ServerInfosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
