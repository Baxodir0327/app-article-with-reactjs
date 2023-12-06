import React, {useState} from 'react';
import {Input} from "../ui";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='text-center'>
            <main className="form-signin w-25 m-auto mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <Input label={'Username'} state={name} setState={setName}/>
                    <Input label={'Email'} state={email} setState={setEmail} type={'email'}/>
                    <Input label={'Password'} state={password} setState={setPassword} type={'password'}/>
                    <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign up</button>
                </form>
            </main>
        </div>
    );
};

export default Register;