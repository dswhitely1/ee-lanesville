import React from 'react';
import {render} from 'react-dom';

// Redux
import {Provider} from 'react-redux';
import store from './store';

// React Router

import {BrowserRouter as Router} from "react-router-dom";

import App from './components/App';

import './index.scss';

const emergencyElectricApp = <Provider store={store}><Router><App/></Router></Provider>;
const rootDocumentTag = document.getElementById('root');

render(emergencyElectricApp,rootDocumentTag);