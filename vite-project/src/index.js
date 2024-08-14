import React from "react";
import ReactDom from 'react-dom/client';
import App from '/App';
import { createStore } from 'redux';
import {rootReducer} from "./redux/reducers/reducer.js";
import { Provier } from 'react=redux';
import { thunk } from "redux-thunk";


const storeApp = createStore(rootReducer)
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provier store={storeApp}>
        <App />
    </Provier>
);