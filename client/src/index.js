import React from 'react';
import ReactDOM from 'react-dom/client';



import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';
window.$ = window.jQuery = $;
import {App1, App2, App3} from './components/App';
import LifeCycle from './components/LifeCycle';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<h1>Hello World</h1>)

let account = {
  total:1000,
  debit:500,
}
root.render(
  <React.StrictMode>
    <div className='container'>
      <App1 number="Sara"/>
      <App2 name="Nabin"/>
      <App3 account={account} />
      <LifeCycle />
    </div>
  </React.StrictMode>
);
reportWebVitals();
