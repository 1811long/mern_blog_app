import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Article from './components/articles/Article';


const rootNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/articles" element={<Article />}/>
            </Route>
        </Routes>
    </BrowserRouter>, 
    rootNode
);