import ReactDOM from 'react-dom/client';
import React from 'react';
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// $(document).on("click","#CardItem",function(){
//     alert(this.innerText);
//     console.log(this);
// })