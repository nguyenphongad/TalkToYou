import React from 'react';
import ReactDOM from 'react-dom/client';
import StateReelProvider from './components/Interactive/DropDownReels/StateReelProvider';
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <StateReelProvider>
            <App />
      </StateReelProvider>
);
