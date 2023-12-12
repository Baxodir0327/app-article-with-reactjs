import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {ArticleDetail, CreateArticle, EditArticle, Login, Main, Navbar, Register} from "./components";
import AuthService from "./service/Auth";
import {useDispatch} from "react-redux";
import {singUserFailure, singUserSuccessful} from "./slice/Auth";
import {getItem} from "./helpers/Persistance-storage";
import {getArticleFailur, getArticlesSuccess, getArticleStart} from "./slice/Article";
import ArticleService from "./service/Article";

const App = () => {
    const dispatch = useDispatch()

    const getUser = async () => {
        return await AuthService.getUser()
            .then(res => {
                dispatch(singUserSuccessful(res.user))
            }).catch(err => {
                dispatch(singUserFailure(err.response.data.errors))
            })

    }

    const getArticles = async () => {
        try {
            dispatch(getArticleStart())
            const res = await ArticleService.getArticles()
            dispatch(getArticlesSuccess(res.articles))
        } catch (er) {
            dispatch(getArticleFailur(er.response.data.errors))
        }
    }

    useEffect(() => {
        if (getItem('token')) {
            getUser()
        }
        getArticles()
    }, []);

    return (
        <div className='container'>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/articles/:slug'} element={<ArticleDetail/>}/>
                <Route path={'/create-article'} element={<CreateArticle/>}/>
                <Route path={'/edit-article/:slug'} element={<EditArticle/>}/>
            </Routes>
        </div>
    );
};

export default App;