import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from "../slice/Auth"
import ArticleReducer from "../slice/Article";
const store = configureStore({
    reducer: {
        auth:AuthReducer,
        articles:ArticleReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export { store };