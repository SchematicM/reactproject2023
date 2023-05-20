import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import {setupStore} from "./redux";

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore();
export  const Context = createContext([]);
const value: any= [];
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Context.Provider value={value}>
            <App/>
            </Context.Provider>
        </BrowserRouter>
    </Provider>
);

