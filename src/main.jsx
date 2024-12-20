
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Redux
import { Provider } from 'react-redux';
import { store } from './state/store.js';

// if (typeof window.setImmediate === 'undefined') {
//   window.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>


  // </React.StrictMode>,
      <Provider store={store}>
      <App />
    </Provider>
)
