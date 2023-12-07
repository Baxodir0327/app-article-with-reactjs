import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from "../slice/Auth"
const store = configureStore({
    reducer: {
        auth:AuthReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export { store };