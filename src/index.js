import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appInsights = require('react-appinsights');
appInsights.init({instrumentationKey:'428296fc-cd90-4203-8471-8665ad10c9de'});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();