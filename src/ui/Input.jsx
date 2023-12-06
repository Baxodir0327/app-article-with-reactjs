import React, {useState} from 'react';

const Input = ({label, state, setState, type='text'}) => {
    return (
        <div>
            <div className="form-floating">
                <input type={type}
                       className="form-control "
                       value={state}
                       onChange={e => setState(e.target.value)}
                       id="floatingInput"
                       placeholder={label}/>
                <label htmlFor="floatingInput">{label}</label>
            </div>
        </div>
    );
};

export default Input;