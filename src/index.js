import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
