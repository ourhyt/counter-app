import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";
import {App} from "./FirstApp.jsx";

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123}/>
    </React.StrictMode>
);
