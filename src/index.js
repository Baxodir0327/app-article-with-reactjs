import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // https://api.realworld.io/api/articles
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


