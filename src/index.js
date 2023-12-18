import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ProductData } from './contextProvider/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductData>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductData>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

