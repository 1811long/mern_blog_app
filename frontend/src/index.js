import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootNode = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    rootNode
);