import React from 'react';

import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

// import Booklist from './Booklist';
// import Filter from './Filter';
// import Search from './Search';
// import Btn1 from './Btn1';
// import Task from './Task';
// import Tasklist4 from './Tasklist4';
// import Datahook from './Datahook';
// import FilterData from './FilterData'; 
import Hook from './Hook';
// import  from '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook />
    <App />
  </React.StrictMode>
);

reportWebVitals();
