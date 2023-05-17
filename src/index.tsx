import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux";
import {Provider} from "react-redux";

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

