import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail: null,
    error: null
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleStart: state => {
            state.isLoading = true
        },
        getArticlesSuccess: (stata, action) => {
            stata.isLoading = false
            stata.articles = action.payload
        },
        getArticleFailur: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        getArticleDetailStart: (state) => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state,action) => {
            state.isLoading=false
            state.articleDetail=action.payload
        },
        getArticleDetailFailur: (state,action) => {
            state.isLoading=false
            state.error=action.payload
        },
        postArticleStart: state => {
            state.isLoading = true
        },
        postArticleSuccess: state => {
            state.isLoading = false
        },
        postArticleFailure: state => {
            state.isLoading = false
            state.error = 'Error'
        },

    },
})

export const {
    getArticleStart,
    getArticlesSuccess,
    getArticleFailur,
    getArticleDetailStart,
    getArticleDetailSuccess,
    getArticleDetailFailur,
    postArticleFailure,
    postArticleStart,
    postArticleSuccess
} = articleSlice.actions
export default articleSlice.reducer