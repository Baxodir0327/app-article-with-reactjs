import {Input} from "../ui";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {singUserFailure, singUserStart, singUserSuccessful} from "../slice/Auth";
import AuthService from "../service/Auth";
import {ValidationError} from "./index";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    const navigate = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
        dispatch(singUserStart());
        const user = {email, password}

        await AuthService.userLogin(user)
            .then(res => {
                dispatch(singUserSuccessful(res.user))
                navigate('/')
            }).catch(error => {
                dispatch(singUserFailure(error.response.data.errors))
            })
    }


    return (
        <div>
            <div className='text-center'>
                <main className="form-signin w-25 m-auto mt-5">
                    <form>
                        <h1 className="h3 mb-3 fw-normal" >Please login</h1>
                        <ValidationError/>
                        <Input label={'Email Address'} state={email} setState={setEmail} type={'email'}/>
                        <Input label={'Password'} state={password} setState={setPassword} type={'password'}/>
                        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit" disabled={isLoading}
                                onClick={loginHandler}>{isLoading ? 'loading...' : 'Login'}
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
};
export default Login;