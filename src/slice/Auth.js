import {createSlice} from '@reduxjs/toolkit';
import {removeItem, setItem} from "../helpers/Persistance-storage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        singUserStart: state => {
            state.isLoading = true
        },
        singUserSuccessful: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user=action.payload
            setItem('token',action.payload.token )

        },
        singUserFailure: (state,action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser: (state) => {
            state.user = null
            state.loggedIn=false
            removeItem('token')
        },
    }
})

export const {
    singUserStart,
    singUserSuccessful,
    singUserFailure,
    logoutUser
} = authSlice.actions

export default authSlice.reducer