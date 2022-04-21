import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ListArticles from './components/articles/ListArticles';
import NewArticleForm from './components/form/NewArticleForm';
import ArticlePage from './components/articles/ArticlePage';
import EditArticleForm from './components/form/EditArticleForm';
import Home from './routes/Home';
import LoginPage from './components/login_page/LoginPage';
const rootNode = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/articles" element={<ListArticles />}/>
                <Route path="/articles/:articleId" element={<ArticlePage />}/>
                <Route path="/articles/new-article" element={<NewArticleForm/>}/>
                <Route path="/articles/edit/:articleId" element={<EditArticleForm />} />
            </Route>
        </Routes>
    </BrowserRouter>, 
    rootNode
);