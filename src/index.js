import React from 'react';
import ReactDOM from 'react-dom';
import './css/fonts.css';
import './css/index.css';
import './css/home.css';
import './css/case.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
