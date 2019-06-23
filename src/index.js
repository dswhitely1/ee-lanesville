import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

const emergencyElectricApp = <App/>;
const rootDocumentTag = document.getElementById('root');

render(emergencyElectricApp,rootDocumentTag);