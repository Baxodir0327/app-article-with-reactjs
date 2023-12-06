import {Input} from "../ui";
import React, {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className='text-center'>
                <main className="form-signin w-25 m-auto mt-5">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please login</h1>
                        <Input label={'Email Address'} state={email} setState={setEmail} type={'email'}/>
                        <Input label={'Password'} state={password} setState={setPassword} type={'password'}/>
                        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Login</button>
                    </form>
                </main>
            </div>
        </div>
    );
};
export default Login;