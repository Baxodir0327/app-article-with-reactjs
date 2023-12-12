import React, {useEffect, useState} from 'react';
import {ArticleForm} from "./index";
import {
    getArticleDetailFailur,
    getArticleDetailStart,
    getArticleDetailSuccess,
    postArticleFailure,
    postArticleStart,
    postArticleSuccess
} from "../slice/Article";
import ArticleService from "../service/Article";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const {slug} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetails(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailur())
            }
        }

        getArticleDetail()
    }, [])

    const formSubmit = async e => {
        e.preventDefault()
        const article = {title, description, body}
        dispatch(postArticleStart())
        try {
            await ArticleService.editArticle(slug, article)
            dispatch(postArticleSuccess())
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }

    const formProps = {title, setTitle, description, setDescription, body, setBody, formSubmit}

    return (
        <div className='text-center'>
            <h1 className='fs-2'>edit article</h1>
            <div className='w-75 mx-auto'>
                <ArticleForm {...formProps} />
            </div>
        </div>
    );
};

export default EditArticle;