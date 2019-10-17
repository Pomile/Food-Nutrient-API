import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './serviceWorker';
import App from "./App.js";
import store from './store/store';
import './index.css';
import './pwaPromptInstall';

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>      
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
