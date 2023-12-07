import React, {useState} from 'react';
import {Input} from "../ui";
import {useDispatch, useSelector} from "react-redux";
import {singUserFailure, singUserStart, singUserSuccessfule} from "../slice/Auth";
import AuthService from "../service/auth";
import {ValidationError} from "./index";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)

    const registerHandler =async (e) => {
        e.preventDefault()
        dispatch(singUserStart())

        const user={email,password,username:name}

        await AuthService.userRegister(user)
            .then(res => {
                console.log(res.user)
                dispatch(singUserSuccessfule(res.user))
            })
            .catch(error=>{
                dispatch(singUserFailure(error.response.data.errors))
            })
        // console.log(response)
        // try {
        //     const response=await AuthService.userRegister(user)
        //     dispatch(registerUserSuccessfule())
        //     console.log(response)
        //     console.log(user)
        // } catch (error) {
        //     dispatch(registerUserFailure())
        //     console.log(error)
        // }


    }
    return (
        <div className='text-center'>
            <main className="form-signin w-25 m-auto mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <ValidationError/>
                    <Input label={'Username'} state={name} setState={setName}/>
                    <Input label={'Email'} state={email} setState={setEmail} type={'email'}/>
                    <Input label={'Password'} state={password} setState={setPassword} type={'password'}/>
                    <button onClick={registerHandler}
                            disabled={isLoading}
                            className="w-100 btn btn-lg btn-primary mt-4"
                            type="submit">
                        {isLoading? "loading" : "Register"}</button>
                </form>
            </main>
        </div>
    );
};
export default Register;