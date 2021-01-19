import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './context/context';
import { SpeechProvider} from '@speechly/react-client';
import App from './App';
import './index.css';


ReactDOM.render(
    <SpeechProvider appId="7f9ad41c-5640-443f-965c-2da4e143e2d4" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root')
);